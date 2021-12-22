// Method:    LuLu's List A - Spaced Out Format
// Option:    LuLu_ListA

// Format:
// (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG


function modeLulusListA(lines, i, lineCode ) {
    let title, url, desc, tags, icon, flag = ''; // declare vars used later
    let parts, indent = '';

    switch (lineCode) {
        //b Skip Comment Lines ///////////////////////////////////////////
        case '//':
            console.log('skip comments'); 
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
            // Make H2 tag
            output.value += 
            indent + '<h2 class=\"luluDiv ' + tags + '\">' + title + '</h2>\n';
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
            output.value += parts[0] + 
            '<div class=\"luluDiv ' + 
            parts[4].trim() + '\">\n' + 
            parts[0] + 
            '\t<a class=\"luluLink\" href=\"' + 
            parts[2].trim() + 
            '\" alt=\"' + 
            parts[1].trim() + 
            '\" target=\"_blank\" rel=\"noopener noreferrer\">\n' + 
            parts[0] + 
            '\t\t' + 
            parts[1].trim() + 
            '</a>\n' + 
            parts[0] + 
            '\t<span class=\"luluDesc\">\n' + 
            parts[0] + 
            '\t\t - ' + 
            parts[3].trim() + '\n' + 
            parts[0] + 
            '\t</span>\n' + 
            parts[0] + 
            '</div>\n';
            
            break;
        
        //b No LineCode ///////////////////////////////////////////
        default:
            // Just output the line if it's not marked with a "Line Code"
            output.value += lines[i] + '\n';
            break;
    }
    return;
}
