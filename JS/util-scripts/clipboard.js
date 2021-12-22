// Send Output to Clipboard
function clipboardCopy() {
    let source = document.getElementById("output");
    source.select();
    source.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
    alert("Copied the Output text to Clipboard.");
}
