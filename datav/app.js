// 服务器入口文件

//1.创建KOA的实例对象
const koa = require('koa');
const app = new koa();
//2.绑定中间件
// 绑定第一层中间件
const respDurationMiddleware = require('./middleware/koa_responese_duration');
app.use(respDurationMiddleware);
// 绑定第二层中间件
const respHeaderMiddleware = require('./middleware/koa_responese_header');
app.use(respHeaderMiddleware);

// 绑定第三层中间件
const respDataMiddleware = require('./middleware/koa_responese_data');
app.use(respDataMiddleware);
//3.绑定端口号8888
app.listen(8888);

const webSocketService = require('./service/web_socket_service')
// 开启服务端监听，监听客户端连接
// 当某一客户端连接成功2之后，就会对这个客户端进行websocket事件监听
webSocketService.listen()