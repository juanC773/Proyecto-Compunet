fetch('http://localhost:3000')
    .then(response => response.text())
    .then(data => {
        const indexMessageElement = document.getElementById('indexMessage');
        console.log(data)
        console.log(data.message)
        indexMessageElement.textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });