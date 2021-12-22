// Thanks to:
// https://stackoverflow.com/questions/9196954/how-to-read-line-by-line-of-a-text-area-html-tag
// https://www.tracedynamics.com/javascript-remove-character-from-string/
// 
// Note: the "innerHTML" method doesn't seem to work for textarea elements, so .value must be used instead.
// Source of this solution: https://stackoverflow.com/questions/1927593/cant-update-textarea-with-javascript-after-writing-to-it-manually
//

// This function triggers when you click the CONVERT button.
function readLines() {
    // b INIT ///////////////////////////////////////////////////////////////////
    let output = document.getElementById("output"); // Set the output element to a variable, so we can use it shorthand later
    output.value = ''; // Clear OutPut (html TEXTAREA)

    let lines = document.getElementById('input').value.split('\n'); // Split by NewLines \n
    let mode = document.getElementById("method").value; // set MODE var to the value from the HTML Option Box
    if (mode == null) {mode = 'LuLu_ListA'}; // If this box is NULL for some reason, default to the first option.
    console.log('SELECTED: ' + mode);


    // b Line Loop /////////////////////////////////////////////////////////////
    // Loop through Input, strip lines
    for (var i = 0;i < lines.length;i++) {
        if (lines[i] === undefined) {console.log('skip undefined'); continue;} // Skips undefined lines!
        // Use a 2 character "Line Code" to test line type
        var lineCode = lines[i].trim().substring(0, 2);

        // ANCHOR : Testing Area
        // * TESTING AREA ////////////////////////////////////////////////////////////////////////
        // * TESTING AREA ////////////////////////////////////////////////////////////////////////

        
        // * TESTING AREA ////////////////////////////////////////////////////////////////////////
        // * TESTING AREA ////////////////////////////////////////////////////////////////////////
        
        
        // ANCHOR ////////////////////////////////////////////////////////////////////////////////
        // ! /////////////////////////////////////////////////////////////////////////////////////
        // ! SWITCH CASE GOES HERE ///////////////////////////////////////////////////////////////
        switch(mode) {
            case 'PLACEHOLDER': output.value += 'Hello World!' + '\n'; break;
            case 'LuLu_ListA': modeLulusListA(lines, i, lineCode); break;
            case 'PlainText': modeSpreadsheetTSV(lines, i, lineCode); break;
            case 'html_table': modeHTMLTable(lines, i, lineCode); break;
            case 'JO2_SocialLinks': modeJo2SocialLinks(lines, i, lineCode); break;
            default: break;
        }
        // ! SWITCH CASE GOES HERE ///////////////////////////////////////////////////////////////
        // ! /////////////////////////////////////////////////////////////////////////////////////

    }	// END FOR LOOP
    

    // b Complete /////////////////////////////////////////////////////////////
    clipboardCopy(); // Send Output to Clipboard
    
    return;
} // END FUNCTION readLines(mode)