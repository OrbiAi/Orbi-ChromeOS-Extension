document.getElementById("connectBtn").addEventListener("click", function() {
    const ipInput = document.getElementById("ipInput").value;
    if (ipInput) {
        // Open a new popup window
        const newWindow = window.open("", "IPConnectorPopup", "width=800,height=600,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no");
        
        // Write basic HTML to the new window and include the external JS file
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Orbi Connector</title>
                <link rel="icon" type="image/x-icon" href="/static/connect.ico">
            </head>
            <body style="font-family: sans-serif; color: aquamarine; background-color: rgb(27, 44, 44);">
                <h3>Chrome OS Connector</h3>
                <h1>Orbi</h1>
                <video 
                    style="max-width: 75%; border: 4px outset darkslategray;" 
                    id="video" 
                    autoplay
                ></video>
                <script src="popup-content.js"></script>
            </body>
            </html>
        `);
        
        newWindow.document.close();

        // Send the IP address to the new window after it loads
        newWindow.onload = function() {
            newWindow.postMessage({ ip: ipInput }, "*");
        };
    } else {
        alert("Please enter a valid IP address.");
    }
});
