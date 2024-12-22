import http from "node:http"

const products = [
    {id:1,name:"mouse",price:100},
    {id:2,name:"teclado",price:200},
    {id:3,name:"monitor",price:300},
    {id:4,name:"headset",price:400},
    {id:5,name:"mousepad",price:500},
    {id:6,name:"webcam",price:200},
]

const server = http.createServer((req,res)=>{
    if(req.method === "GET" && req.url === "/products"){
        res.end(JSON.stringify(products))
    }

})

export{server}