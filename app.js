console.log("JavaScript is working!");
function onScanSuccess(decodedText, decodedResult) {
  // Handle on scan success
  console.log(`Code scanned = ${decodedText}`, decodedResult);
  document.getElementById("qr-reader-results").innerText = decodedText;
}

function onScanFailure(error) {
  // Handle on scan failure, usually better to do nothing
  console.error(`Code scan error = ${error}`);
}

window.onload = function () {
  var config = { fps: 10, qrbox: { width: 250, height: 250 } };
  var html5QrCode = new Html5Qrcode("qr-reader");
  html5QrCode.start(
    { facingMode: "environment" },
    config,
    onScanSuccess,
    onScanFailure
  );
};
