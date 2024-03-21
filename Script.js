// Generate random coordinates for the pixel
const randomX = Math.floor(Math.random() * window.innerWidth);
const randomY = Math.floor(Math.random() * window.innerHeight);

// Set the position of the random pixel
const randomPixel = document.getElementById('random-pixel');
randomPixel.style.left = randomX + 'px';
randomPixel.style.top = randomY + 'px';

// Python-based Unblocker Proxy using Flask
function openProxy() {
    const url = document.getElementById('proxy-url').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }
    window.open(`http://localhost:5000/proxy?url=${encodeURIComponent(url)}`);
}

// Generate random URL
const randomCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// Redirect to the new URL immediately
window.location.replace(`https://example.com/${randomCode}`);

// Copy website code to clipboard
function copyCode() {
    const htmlContent = document.documentElement.outerHTML;
    navigator.clipboard.writeText(htmlContent)
        .then(() => alert('Website code copied to clipboard!'))
        .catch(err => console.error('Failed to copy website code: ', err));
}

// Toggle app window visibility
function toggleApp(appName) {
    const appWindow = document.getElementById(`${appName}-window`);
    if (appWindow.style.display === 'block') {
        appWindow.style.display = 'none';
    } else {
        appWindow.style.display = 'block';
    }
}

// Search apps
function searchApps() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let buttons = document.querySelectorAll('.task-button');
    for (let i = 0; i < buttons.length; i++) {
        let txtValue = buttons[i].textContent || buttons[i].innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            buttons[i].style.display = '';
        } else {
            buttons[i].style.display = 'none';
        }
    }
}
