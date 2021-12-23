// Method:    HTML Table
// Option:    html_table

// Format:
// (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG

function modeHTMLTable(lines, i, lineCode ) {
    let title, url, desc, tags, icon, flag = ''; // declare vars used later
    let parts, indent = '';

    switch (lineCode) {
        //b Skip Comment Lines ///////////////////////////////////////////
        case '//': console.log('skip comments'); break;

        //b Long Header (colspan) ///////////////////////////////////////////
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
            // Table Header tag
            output.value += 
                indent + '<tr class=\"luluDiv ' + tags + '\">\n' + 
                indent + '\t<th colspan=\"5\">' + title + '</th>\n' + 
                indent + '</tr>\n';
            break;
    
        //b Table Headers ///////////////////////////////////////////
        case '__':
            // Convert "##" & Split the line into parts by "||"
            lines[i] = lines[i].replace('__','||');
            parts = lines[i].split('||');
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
        
        //b No LineCode ///////////////////////////////////////////
        default:
            // Just output the line if it's not marked with a "Line Code"
            output.value += lines[i] + '\n';
            break;
    }
    return;
}
