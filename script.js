const { response } = require("express")
const text = document.getElementById('inputText').value

document.getElementById('getMessage').addEventListener('click', () => {
    fetch('/api/message')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerHTML = data.message;
        })
        .catch(error => console.error('Ошибка:', error))
})
document.getElementById('echoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('/api/echo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
    })
        .then(data => {
            document.getElementById('echoOutput').innerText = data.echo;
        })
})
