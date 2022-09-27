// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 导入mongoose模块
const mongoose = require('mongoose');
// 导入bodyParser模块
const bodyParser = require('body-parser');
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));
// 处理post请求参数
app.use(bodyParser.json()); 


// 数据库连接
mongoose.connect('mongodb://qxx:123456@localhost:27017/todo')
	.then(() => {
		console.log("数据库连接成功");
	})
	.catch(() => {
		console.log("数据库连接失败");
	})


// 导入todo路由案例
const todoRouter = require('./route/todo')
// 当客户端的请求路径以/todo开头时
app.use('/todo', todoRouter);


app.get('/xml', (req, res) => {
	res.header('content-type', 'text/xml');
	res.send('<message><title>消息标题</title><content>消息内容</content></message>')
});

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');