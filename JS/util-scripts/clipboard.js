// Send Output to Clipboard
function clipboardCopy() {
    let source = document.getElementById("output");
    source.select();
    source.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
    alert("Copied the Output text to Clipboard.");
}

// Simply selects all the text in the INPUT box, for easy pasting.
function textSelect() {
    let source = document.getElementById("input");
    source.select();
    source.setSelectionRange(0, 99999); /* For mobile devices */
}

// Send Output to Clipboard
// FIXME: Firefox doesn't allow the newer Clipboard API on non HTTPS pages (which means it doesn't work in Live Server)
// So as of right now, this function doesn't do anything and isn't used.
// LINK: https://www.sitepoint.com/clipboard-api/
function clipboardPaste() {
    if (navigator.clipboard) {
        console.log('Clipboard API available');
    } else {
        console.log('Clipboard API [[NOT]] available');
    }
}
