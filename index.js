// const express = require('express');
// const { Pool } = require('pg');

// const app = express();

// const pool = new Pool({
//   // 配置数据库连接信息
// });

// app.get('/getChatMsg.json', async (req, res) => {
//   const chatId = req.query.chatid;
//   try {
//     const result = await pool.query('SELECT id, sender, content, sendtime FROM chatroom WHERE chatid = $1 order by sendtime', [chatId]);
//     res.json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error retrieving chat messages');
//   }
// });

// app.post('/saveChatMsg', async (req, res) => {
//     const id = req.body.id;
//     const sender = req.body.sender;
//     const content = req.body.content;
//     const sendtime = req.body.sendtime;
//     try {
//       await pool.query('INSERT INTO chatroom (id, sender, content, sendtime) VALUES ($1, $2, $3, $4)', [chatId, sender,content,sendtime]);
//       res.send('Chat message saved successfully');
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error saving chat message');
//     }
//   });

  
//    // 启动服务器
//    const port = process.env.PORT || 3000;
//    app.listen(port, () => {
//      console.log(`Server running on port ${port}`);
//    });

const express = require('express');
const app = express();

// 定义一个简单的接口路由
app.get('/api/hello', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});