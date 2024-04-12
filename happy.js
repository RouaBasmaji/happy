const messages = [
    '🎂 Happy Birthday!',
    '🎁',
    '💝',
    '🎉',
    'My Dad Mahmoud! 💜',
    
    '😍'
];

const messageElement = document.querySelector('.message');

function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
}

function showMessageWithDelay() {
    setInterval(showRandomMessage, 350);
}

showMessageWithDelay();