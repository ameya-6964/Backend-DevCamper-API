const http = require("http");


const todos = [
    { id: 1, text: "Todo 1" },
    { id: 2, text: "Todo 2" },
    { id: 3, text: "Todo 3" },
]

const server = http.createServer((req, res) => {
    if (req.url === "/todos") {
        res.setHeader("Content-Type", "application/json")
        res.setHeader("X-Powered-By", "Node.js")
        res.end(JSON.stringify(todos))
    } else if (req.url === "/") {
        const { headers, url, method } = req
        res.setHeader("Content-Type", "text/html")
        res.setHeader("X-Powered-By", "Node.js")
        res.end(`<h1> Host Is ${headers.host}, Path Is ${url} And Method Is ${method} </h1>`)
    }

})


server.listen(3000, () => {
    console.log(`Server Started On Port http://localhost:3000`);
})