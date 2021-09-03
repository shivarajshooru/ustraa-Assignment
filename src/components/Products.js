import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Products() {

    const [catArray,setCatArray] = useState(0) 
    const [products,setProducts] = useState(0)
    const [moreProducts,setMoreProducts] = useState([])
    const [view,setView] = useState("[+] View More")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [catName,setCatName] = useState("")

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    function handleView() {
        if(view === "[+] View More" ) {
            setProducts([...moreProducts])
            setView("[-] View Less")
        } else {
            setProducts([moreProducts[0],moreProducts[1],moreProducts[2]])
            setView("[+] View More")
        }

    }

    async function clickCat(catId,catsName) {
        const data = await fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${catId}`).then((r)=> r.json())
        
        let dupProduct = [data.products[0],data.products[1],data.products[2]]
        setProducts([...dupProduct])
        let dupProduct2 = [...data.products]
        setMoreProducts([...dupProduct2])
       
        setCatName(catsName)
        
    }
    
   

  

    useEffect(()=>{
        fetch("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob",
        {
            headers : {
                "Content-Type": "application/json; charset=utf-8"

            }
        }
        )
        .then((response)=>response.json())
      .then((r)=>{
          
          setCatArray(r)
          
         setMoreProducts(r.product_list.products)
          setProducts([r.product_list["products"][0],r.product_list["products"][1],r.product_list["products"][2]])
    setCatName(r.category_list[0].category_name)
        })
},[])

    return (
        <div>
        <h2>Our Products</h2>

     
       
        <div className="cataGory">
            <div className="viewall">View All</div>
    {catArray.category_list ? (catArray.category_list.map((index,item)=>{
    return <div onClick={()=>{clickCat(index.category_id,index.category_name)}} id={index.category_id} key={index.category_name} style={{backgroundImage:`url(${index.category_image})`}}>{index.category_name}</div>
})):null}
<div className="viewall">View All</div>
        </div>


        <div className="product" style={{marginLeft:"5vw",marginTop:"10vh"}}>
        {products ? (products.map((item,index)=>{
           
            return (<div className="proItem" key={item.name} >
                <img src={item.image_urls["x200"]} alt={item.name}/>
                <div style={{marginTop:"20px",marginLeft:"20px"}}>
        {item.name}<span style={{marginLeft:"10px"}} >{item.rating}*</span>
        <p>({item.weight} gm)</p>
        <h4>₹ {item.price_new}<span style={{marginLeft:"10px",textDecoration:"line-through",fontWeight:"normal"}}>{item.price}</span></h4>
        {item.is_in_stock === true ? <button className="stock">ADD TO CART</button> : <button className="nostock">OUT OF STOCK</button>}
        
                </div>
                
            </div>
            
            
            )
        })) : null}
   

        </div>
        { catArray ? ( <div className="footer">
        <label className="selcat">showing for <span>{catName}</span></label>

        <div >
  
     
     
  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="dropdown" >
    change
  </Button>
  <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    
  >

{catArray.category_list ? (catArray.category_list.map((index,item)=>{
return <MenuItem onClick={()=>{clickCat(index.category_id,index.category_name);handleClose()}} id={index.category_id} key={index.category_name} >{index.category_name}</MenuItem>
})):null}
  </Menu>


                <button className="view" onClick={handleView}>{view}</button>
                </div>
  
        </div>
    ) : null}

        </div>
    )
}

