document.getElementById('commandInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        executeCommand();
    }
});

function executeCommand() {
    const command = document.getElementById('commandInput').value;
    fetch('/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
    })
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById('output');
            outputDiv.textContent += `\n$ ${command}\n${data.result}\n`;
            document.getElementById('commandInput').value = '';
            outputDiv.scrollTop = outputDiv.scrollHeight;
        })
        .catch(error => console.error('Error:', error));
}

function runPredefinedCommand(command) {
    document.getElementById('commandInput').value = command;
    executeCommand();
}
