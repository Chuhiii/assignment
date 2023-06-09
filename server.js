const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
    static: "./build"
})

const port = process.env.PORT || 8000;
server.unsubscribe(middlewares);
server.unsubscribe(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

server.use(router);
server.listen(port, () => {
    console.log(`Servcer is running on ${port}`);
});