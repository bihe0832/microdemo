// microdemo PHP → nodejs 迁移（get/post 回显接口）
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 等价原 AndroidHTTP/get.php：GET 参数回显
app.get('/AndroidHTTP/get.php', function (req, res) {
  const para = req.query.para || '';
  res.json({ ret: 0, msg: 'ok', para: para });
});

// 等价原 AndroidHTTP/post.php：POST 参数回显
app.post('/AndroidHTTP/post.php', function (req, res) {
  const para = (req.body && req.body.para) || '';
  res.json({ ret: 0, msg: 'ok', para: para });
});

app.listen(PORT, function () {
  console.log('microdemo server listening on ' + PORT);
});
