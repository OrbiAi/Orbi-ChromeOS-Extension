document.getElementById("connectBtn").addEventListener("click", function() {
    const ipInput = document.getElementById("ipInput").value;
    if (ipInput) {
        // Open a new popup window
        const newWindow = window.open("", "IPConnectorPopup", "width=800,height=600,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no");
        
        // Write basic HTML to the new window and include the external JS file
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <style>
            :root {
                --latte-crust: #dcd7ba;   /* Base background */
                --latte-mantle: #e7e1c7;  /* Slightly darker background */
                --latte-base: #f4e7d0;    /* Primary background */
                --latte-surface0: #f5e0dc; /* Foreground elements */
                --latte-surface1: #f2cdcd; /* Foreground elements (lighter) */
                --latte-surface2: #f5e0dc; /* Foreground elements (lighter) */
                --latte-overlay0: #c6aa9f; /* Text color */
                --latte-overlay1: #b1a1a7; /* Text color (lighter) */
                --latte-overlay2: #9e8d89; /* Text color (lighter) */
                --latte-text: #4c4c4c;     /* Primary text color */
                --latte-subtext0: #6e6c7e; /* Subtext color */
                --latte-subtext1: #a09c95; /* Subtext color (lighter) */
                --latte-frap: #8e94a5;     /* Accent color */
                --latte-peach: #f49c6a;    /* Peach color */
                --latte-mauve: #d3869b;    /* Mauve color */
                --latte-yellow: #f4e285;   /* Yellow color */
                --latte-rosewater: #f1b5b5; /* Rosewater color */
                --latte-lavender: #b4befe;  /* Lavender color */
                --latte-blue: #89b4fa;      /* Blue color */
                --latte-sky: #6cb6eb;       /* Sky color */
                --latte-red: #f7768e;       /* Red color */
                --latte-green: #a6e3a1;     /* Green color */
            }
            body {
                background-color: var(--latte-crust);
                color: var(--latte-text);
            }
            video {
                max-width: 75%;
                border: 4px solid var(--latte-frap);
                border-radius: 5px;
            }
            a {
                text-decoration: none;
                font-weight: bold;
                color: var(--latte-frap);
            }
            </style>
            <head>
                <title>Orbi Connector</title>
                <link rel="icon" type="image/x-icon" href="/static/connect.ico">
            </head>
            <body>
                <h3>Chrome OS Connector</h3>
                <h1>Orbi</h1>
                <video 
                    id="video" 
                    autoplay
                ></video>
                <p><a href="https://github.com/OrbiAI/Orbi-ChromeOS" target="_blank" rel="noopener noreferrer">Orbi ChromeOS</a> | <a href="https://github.com/OrbiAI/Orbi-ChromeOS-Extension" target="_blank" rel="noopener noreferrer">GitHub</a></p>

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
