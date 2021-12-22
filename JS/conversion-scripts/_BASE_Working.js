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
    let indent, title, url, desc, tags, icon, flag = ''; // declare vars used later
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



        // ! SWITCH CASE GOES HERE ///////////////////////////////////////////////////////////////
        switch(mode) {

            //b BLANK Option /////////////////////////////////////////////////
            case 'PLACEHOLDER':		// Option0 does nothing, just a placeholder
                output.value += 'Hello World!' + '\n';
                break;
            
            ////////////////////////////////////////
            // LuLu's List Format /////////////////
            //////////////////////////////////////
            // (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG
            case 'LuLu_ListA':        // Spaced Out Formatting
            // Skip Comment Lines
            if (lineCode === '//') {console.log('skip comments'); break;} 
            // Headers
            if (lineCode === '##') {
                // Convert "##" & Split the line into parts by "||"
                lines[i] = lines[i].replace('##','||');
                let parts = lines[i].split('||');
                indent = parts[0];
                // error fix
                if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                // Make H2 tag
                document.getElementById("output").value += 
                    indent + '<h2 class=\"luluDiv ' + tags + '\">' + title + '</h2>\n';
                break;
            }    
            // Main List Item type
            if (lineCode === '||') { 
                // Split the line into parts by "||"
                let parts = lines[i].split('||');
                indent = parts[0];
                // error fix
                if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                // Output Secure Link Lists
                document.getElementById("output").value += parts[0] + '<div class=\"luluDiv ' + parts[4].trim() + '\">\n' + parts[0] + '\t<a class=\"luluLink\" href=\"' + parts[2].trim() + '\" alt=\"' + parts[1].trim() + '\" target=\"_blank\" rel=\"noopener noreferrer\">\n' + parts[0] + '\t\t' + parts[1].trim() + '</a>\n' + parts[0] + '\t<span class=\"luluDesc\">\n' + parts[0] + '\t\t - ' + parts[3].trim() + '\n' + parts[0] + '\t</span>\n' + parts[0] + '</div>\n';
            }else {
                // Just output the line if it's not marked with a "Line Code"
                document.getElementById("output").value += lines[i] + '\n';
            }
            break;


            //////////////////////////////////////////////////////////////
            // SpreadSheet Output Format (tab separated) ////////////////
            ////////////////////////////////////////////////////////////
            // (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG
            case 'PlainText':		// SpreadSheet Format
                // Print Comment Lines
                if (lineCode === '//') {
                    // Convert "//" & Split the line into parts by "||"
                    lines[i] = lines[i].replace('//','||');
                    let parts = lines[i].split('||');
                    indent = parts[0];
                    // error fix
                    if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                    if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                    if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                    if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                    if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                    if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                    // Comment Line
                    output.value += 
                        '//\t' + title + 
                        '\t' + url + 
                        '\t' +  desc + 
                        '\t' +  tags + 
                        '\t' +  icon + 
                        '\t' +  flag + 
                        '\t' + '\n';
                    break;
                }
                // Headers
                if (lineCode === '##') {
                    // Convert "##" & Split the line into parts by "||"
                    lines[i] = lines[i].replace('##','||');
                    let parts = lines[i].split('||');
                    indent = parts[0];
                    // error fix
                    if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                    if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                    if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                    if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                    if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                    if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                    // Header
                    output.value += 
                        '##\t' + title + 
                        '\t' + url + 
                        '\t' +  desc + 
                        '\t' +  tags + 
                        '\t' +  icon + 
                        '\t' +  flag + 
                        '\t' + '\n';
                    break;
                }	
                // Main List Item type
                if (lineCode === '||') { 
                    // Split the line into parts by "||"
                    let parts = lines[i].split('||');
                    indent = parts[0];
                    // error fix
                    if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                    if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                    if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                    if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                    if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                    if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                    // Output Secure Link Lists
                    output.value += 
                        '||\t' + title + 
                        '\t' + url + 
                        '\t' +  desc + 
                        '\t' +  tags + 
                        '\t' +  icon + 
                        '\t' +  flag + 
                        '\t' + '\n';
                }else {
                    // Just output the line if it's not marked with a "Line Code"
                    output.value += lines[i] + '\n';
                }
                break;
    
            ////////////////////////////////////////
            // HTML Table Format //////////////////
            //////////////////////////////////////
            // (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG
            case 'html_table':
                // Skip Comment Lines
                if (lineCode === '//') {console.log('skip comments'); break;}
                // Long Header (colspan)
                if (lineCode === '##') {
                    // Convert "##" & Split the line into parts by "||"
                    lines[i] = lines[i].replace('##','||');
                    let parts = lines[i].split('||');
                    indent = parts[0];
                    // error fix
                    if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                    if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                    if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                    if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                    if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                    if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                    // Table Header tag
                    output.value += 
                        indent + '<tr class=\"luluDiv ' + tags + '\">\n' + 
                            indent + '\t<th colspan=\"5\">' + title + '</th>\n' + 
                        indent + '</tr>\n';
                    break;
                }
                // Table Headers
                if (lineCode === '__') {
                    // Convert "##" & Split the line into parts by "||"
                    lines[i] = lines[i].replace('__','||');
                    let parts = lines[i].split('||');
                    indent = parts[0];
                    // error fix
                    if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                    if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                    if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                    if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                    if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                    if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                    // Table Header tag
                    output.value += 
                        indent + '<tr class=\"luluDiv ' + tags + '\">\n' + 
                            indent + '\t<td>' + title + '</td>\n' + 
                            indent + '\t<td>' + desc + '</td>\n' + 
                            indent + '\t<td>' + tags + '</td>\n' + 
                            indent + '\t<td>' + icon + '</td>\n' + 
                            indent + '\t<td>' + flag + '</td>\n' + 
                        indent + '</tr>\n';
                    break;
                }	
                // Main List Item type
                if (lineCode === '||') {
                    // Split the line into parts by "||"
                    let parts = lines[i].split('||');
                    indent = parts[0];
                    // error fix
                    if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                    if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                    if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                    if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                    if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                    if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                    // Table Data tags
                    output.value += 
                        indent + '<tr class=\"luluDiv ' + tags + '\">\n' + 
                            indent + '\t<td><a href=\"' + 
                            url +
                            '\" target=\"_blank\" rel=\"noopener noreferrer\">' + title + '</a></td>\n' + 
                            indent + '\t<td>' + desc + '</td>\n' + 
                            indent + '\t<td>' + tags + '</td>\n';
                            if (icon === ''){
                                output.value += 
                                indent + '\t<td><img src=\"https://jameso2.neocities.org/styles/social-links/icons/none-48.png\" alt=\"\[' + title + ']\"></td>\n';
                            }else {
                                output.value += 
                                indent + '\t<td><img src=\"https://jameso2.neocities.org/styles/social-links/icons/' + icon + '\" alt=\"\[' + title + ']\"></td>\n';
                            }
                            output.value += 
                            indent + '\t<td>' + flag + '</td>\n' + 
                        indent + '</tr>\n';
                    break;
                }else {
                    // Just output the line if it's not marked with a "Line Code"
                    output.value += lines[i] + '\n';
                }
                break;
                    
            ////////////////////////////////////////////
            // JamesO2 Social Links Format ////////////
            //////////////////////////////////////////
            // (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG
            case 'JO2_SocialLinks':
                // Skip Comment Lines
                if (lineCode === '//') {console.log('skip comments'); break;}
                // H2 Header
                if (lineCode === '##') {
                    // Convert "##" & Split the line into parts by "||"
                    lines[i] = lines[i].replace('##','||');
                    let parts = lines[i].split('||');
                    indent = parts[0];
                    // error fix
                    if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                    if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                    if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                    if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                    if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                    if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                    // Table Header tag
                    output.value += 
                        indent + '<h2 class=\"luluDiv ' + tags + '\">\n' + 
                            indent + '\t<span>' + title + '</span>\n' + 
                        indent + '</h2>\n';
                    break;
                }
                // Main List Item type
                if (lineCode === '||') {
                    // Split the line into parts by "||"
                    let parts = lines[i].split('||');
                    indent = parts[0];
                    // error fix
                    if (parts[1] === undefined){title = '';}else{title = parts[1].trim();}
                    if (parts[2] === undefined){url = '';}else{url = parts[2].trim();}
                    if (parts[3] === undefined){desc  = '';}else{desc = parts[3].trim();}
                    if (parts[4] === undefined){tags  = '';}else{tags = parts[4].trim();}
                    if (parts[5] === undefined){icon  = '';}else{icon = parts[5].trim();}
                    if (parts[6] === undefined){flag  = '';}else{flag = parts[6].trim();}
                    // Table Data tags
                    output.value += 
                        indent + '<a href=\"' + url +'\" target=\"_blank\" rel=\"noopener noreferrer\"><div class=\"luluDiv ' + tags + '\">\n';
                            if (icon == ''){
                                output.value += 
                                indent + '\t<span><img src=\"https://jameso2.neocities.org/styles/social-links/icons/none-48.png\" alt=\"\[' + title + ']\"></span>\n';
                            }else {
                                output.value += 
                                indent + '\t<span><img ';
                                if (flag === '1'){output.value += 'class=\"pxl\" ';}
                                output.value += 
                                'src=\"https://jameso2.neocities.org/styles/social-links/icons/' + icon + '\" alt=\"\[' + title + ']\"></span>\n';
                            }
                            output.value += 
                            indent + '\t<span>' + title + '</span>\n' + 
                            indent + '\t<span>' + desc + '</span>\n' + 
                        indent + '</div></a>\n';
                    break;
                }else {
                    // Just output the line if it's not marked with a "Line Code"
                    output.value += lines[i] + '\n';
                }
                break;
    
                default:
                // no default case
                break;
            }	// END SWICH/CASE
        // ! SWITCH CASE GOES HERE ///////////////////////////////////////////////////////////////

    }	// END FOR LOOP
    

    // b Complete /////////////////////////////////////////////////////////////
    clipboardCopy(); // Send Output to Clipboard
    
    return;
} // END FUNCTION readLines(mode)