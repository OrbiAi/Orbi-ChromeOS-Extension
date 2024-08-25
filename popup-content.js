window.addEventListener("message", async (event) => {
    const ipInput = event.data.ip;
    if (ipInput) {
        await startScreenShare(ipInput);
    } else {
        console.error("Invalid IP address received.");
    }
});

async function startScreenShare(ipInput) {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true
        });

        const video = document.getElementById('video');
        video.srcObject = stream;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const ws = new WebSocket(`ws://${ipInput}:8000`);

        setInterval(() => {
            console.log("Sending screen");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob((blob) => {
                if (blob) {
                    ws.send(blob);
                }
            }, 'image/jpeg');
        }, 75000); // 75 seconds
    } catch (error) {
        console.error("Error starting screen share:", error);
    }
}
