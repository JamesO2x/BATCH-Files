// Method:    JamesO2 Social Links List
// Option:    JO2_SocialLinks

// Format:
// (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG


function modeJo2SocialLinks(lines, i, lineCode ) {
    let title, url, desc, tags, icon, flag = ''; // declare vars used later
    let parts, indent = '';

    switch (lineCode) {
        //b Skip Comment Lines ///////////////////////////////////////////
        case '//': console.log('skip comments'); break
    
        //b H2 Headers ///////////////////////////////////////////
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
                indent + '<h2 class=\"luluDiv ' + tags + '\">\n' + 
                indent + '\t<span>' + title + '</span>\n' + 
                indent + '</h2>\n';            
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
        
        //b No LineCode ///////////////////////////////////////////
        default:
            // Just output the line if it's not marked with a "Line Code"
            output.value += lines[i] + '\n';
            break;
    }
    return;
}