const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const faceDetector = new FaceDetector({
    fastMode: true
});
const textDetector = new TextDetector();
const barcodeDetector = new BarcodeDetector();

if (window.FaceDetector && window.BarcodeDetector && window.TextDetector) {
    shapeDetector();
} else {
    console.log("Shape Detection API not supported")
}

async function shapeDetector() {
    // const video = document.getElementById('video');
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //     navigator.mediaDevices.getUserMedia({
    //         video: true
    //     }).then(function (stream) {
    //         video.src = window.URL.createObjectURL(stream);
    //         video.play();
    //     });
    // }

    // Misc. webcam loading
    const constraints = { video: { facingMode: 'environment' } };
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

    const video = document.createElement('video');
    video.srcObject = mediaStream;
    video.autoplay = true;
    video.onloadedmetadata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    };

    let renderLocked = false;

    function render() {
        if (!video.paused) {
            renderLocked = true;

            // All 3 detectors return promises which turn into an array of faces, text, barcodes
            Promise.all([
                faceDetector.detect(video).catch((error) => console.error(error)),
                textDetector.detect(video).catch((error) => console.error(error)),
                barcodeDetector.detect(video).catch((error) => console.log(error))
            ]).then(([detectedFaces = [], detectedTexts = [], detectedBarcodes = []]) => {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

                context.strokeStyle = '#82fa0f';
                context.fillStyle = '#82fa0f';
                context.font = '24px Helvetica';
                context.lineWidth = 5;

                detectedFaces.forEach((detectedFace) => {
                    const {
                        top,
                        left,
                        width,
                        height
                    } = detectedFace.boundingBox;
                    context.beginPath();
                    context.rect(left, top, width, height);
                    context.stroke();
                    context.fillText('face', left + 5, top - 8);
                });

                context.strokeStyle = '#e0a326';
                context.fillStyle = '#e0a326';
                context.font = '24px Helvetica';

                detectedTexts.forEach((detectedText) => {
                    const {
                        top,
                        left,
                        width,
                        height
                    } = detectedText.boundingBox;
                    context.beginPath();
                    context.rect(left, top, width, height);
                    context.stroke();
                    context.fillText('text', left + 5, top - 12);
                    // Note: Could not get detected text to display values. Everything returned undefined.
                    // https://i.imgur.com/LkDPN6n.png
                    // context.fillText(detectedTexts.rawValue, left + 5, top - 12);
                    // console.log(detectedTexts)
                });

                context.strokeStyle = '#03A9F4';
                context.fillStyle = '#03A9F4';
                context.font = '24px Helvetica';

                detectedBarcodes.forEach((detectedBarcode) => {
                    const {
                        top,
                        left,
                        width,
                        height
                    } = detectedBarcode.boundingBox;
                    const cornerPoints = detectedBarcode.cornerPoints;
                    if (cornerPoints && cornerPoints.length) {
                        const [{
                            x,
                            y
                        }] = cornerPoints;
                        context.beginPath();
                        context.moveTo(x, y);
                        for (let i = 1; i < cornerPoints.length; i++) {
                            context.lineTo(cornerPoints[i].x, cornerPoints[i].y);
                        }
                        context.closePath();
                    } else {
                        context.beginPath();
                        context.rect(left, top, width, height);
                    }
                    context.stroke();
                    context.fillText('barcode', left, top + height + 16);
                    // Note: Could not get barcodes to detect
                });

                renderLocked = false;
            });
        }
    }

    (function renderLoop() {
        requestAnimationFrame(renderLoop);
        if (!renderLocked) {
            render();
        }
    })();
};