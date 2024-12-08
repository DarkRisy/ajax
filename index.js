const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('echo.html', { root: __dirname });
})

let message;
function formatTime(number) {
  return number < 10 ? '0' + number : number;
}
let date = new Date();
app.post('/api/echo', (req, res) => {
  const { text } = req.body;
  console.log("text")
  message = text
  res.json({ echo: `Ты отправил: ${message} | ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}` });
});
app.get('/api/message', (req, res) => {
  console.log("message")
  res.json({ message: `${message} | ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}` });
});
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});