const exp = require("express");
const App = exp();
const port = 3030;

App.get("/", (req, res) => {
  return res.send("new name");
});

const products = [
  {
    id: 1,
    name: "Nike Sneakers",
    category: "shoes",
    price: 45000,
    color: ["red", "blue", "green"],
    sizes: ["38", "39", "40", "41", "42"],
    image: "sneakers",
  },
  {
    id: 2,
    name: "Hp pavillon",
    category: "laptops",
    price: 450000,
    color: ["black", "white"],
    image: "hpPavillon",
  },
  {
    id: 3,
    name: "Sweat Shirt",
    category: "clothings",
    price: 4500,
    color: ["red", "blue", "green"],
    sizes: ["sm", "m", "l", "l", "xxl"],
    image: "sweatShirt",
  },
];

//SET REQUEST: SHOW PRODUCTS 
// ENDPOINT: http://localhost:3030/products

/*
App.get('/products', (req,res)=>{
  try {
    return res.status(200).json(products)
  } catch (error) {
    return res.status(404).json(error.message)
  }
})

*/


//SET REQUEST: SHOW PARTICULAR PRODUCTS 
// ENDPOINT: http://localhost:3030/products/id

App.get('/products/:itemID', (req, res)=>{
    const itemID=req.params.itemID
     const item =products.filter((product)=>product.id==itemID)
try {
    return res.status(200).json(item)
} catch (error) {
    return res.status(404).json(error.message)
}
})


//POST REQUEST: ADD PRODUCTS
// ENDPOINT: http://localhost:3030/products/create

App.post("/products/create", (req, res)=>{
   try {
    console.log(req.body);
   } catch (error) {
    return res.status(404).json(error.message)
}
   }
)



App.get("/products", (req, res)=>{
  res.sendFile("./views/index.html", {root: __dirname})
})

App.listen(port, () => console.log("Server Up"));
