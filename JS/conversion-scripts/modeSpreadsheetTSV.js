// Method:    SpreadSheet Format (tab separated) (*.tsv)
// Option:    PlainText

// Format:
// (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG


function modeSpreadsheetTSV(lines, i, lineCode ) {
    let title, url, desc, tags, icon, flag = ''; // declare vars used later
    let parts, indent = '';

    switch (lineCode) {
        //b Convert "//" & Split the line into parts by "||" ///////////////////////////////////////////
        case '//':
            lines[i] = lines[i].replace('//','||');
            parts = lines[i].split('||');
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

        //b Headers ///////////////////////////////////////////
        case '##':
            // Convert "##" & Split the line into parts by "||"
            lines[i] = lines[i].replace('##','||');
            parts = lines[i].split('||');
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
        
        //b Main List Item type ///////////////////////////////////////////
        case '||':
            // Split the line into parts by "||"
            parts = lines[i].split('||');
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
                
            break;
        
        //b No LineCode ///////////////////////////////////////////
        default:
            // Just output the line if it's not marked with a "Line Code"
            output.value += lines[i] + '\n';
            break;
    }
    return;
}
