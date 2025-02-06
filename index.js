const jsonserver = require('json-server');
const server = jsonserver.create();
const middleware = jsonserver.defaults(); // method post get put delete
const route = jsonserver.router('db.json');
const {config} = require('dotenv');
const cors = require('cors');

config();

server.use(cors());
server.use(middleware);
server.use(route);

const PORT = process.env.PORT || 3010;
const HOST = process.env.HOST || "127.0.0.1";

server.listen(PORT,()=>{
    console.log(`http://${HOST}:${PORT}`);
    
})