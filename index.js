document.addEventListener("DOMContentLoaded", () => {
    let videoStream, mediaRecorder;

    const setupButton = (id, callback) => 
        document.getElementById(id).addEventListener("click", callback);

    const startWebcam = async () => await setupMedia({ video: true });
    const captureScreen = async () => await setupMedia({ video: { mediaSource: "screen" } });
    const stopWebcam = () => videoStream && (videoStream.getTracks().forEach(t => t.stop()), videoStream = null);

    const setupMedia = async constraints => {
        try {
            videoStream = await navigator.mediaDevices.getUserMedia(constraints);
            const videoElement = document.body.appendChild(document.createElement("video"));
            videoElement.srcObject = videoStream;
            videoElement.play();
        } catch (error) { console.error("Error:", error); }
    };

    setupButton("startWebcam", startWebcam);
    setupButton("stopWebcam", stopWebcam);
    setupButton("captureScreen", captureScreen);
});
