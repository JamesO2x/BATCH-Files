// Method:    LuLu's List A - Spaced Out Format
// Option:    LuLu_ListA

// Format:
// (0) || (1) title || (2) URL || (3) description || (4) tag1 tag2 etc || (5) Icon || (6) FLAG



//  ███╗   ███╗ ██████╗ ██████╗ ███████╗         ██╗███████╗      ██╗     ██╗██╗  ██╗███████╗
//  ████╗ ████║██╔═══██╗██╔══██╗██╔════╝         ██║██╔════╝      ██║     ██║██║ ██╔╝██╔════╝
//  ██╔████╔██║██║   ██║██████╔╝█████╗           ██║███████╗█████╗██║     ██║█████╔╝ █████╗  
//  ██║╚██╔╝██║██║   ██║██╔══██╗██╔══╝      ██   ██║╚════██║╚════╝██║     ██║██╔═██╗ ██╔══╝  
//  ██║ ╚═╝ ██║╚██████╔╝██║  ██║███████╗    ╚█████╔╝███████║      ███████╗██║██║  ██╗███████╗
//  ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝     ╚════╝ ╚══════╝      ╚══════╝╚═╝╚═╝  ╚═╝╚══════╝
function modeMFAtoJS(lines, i, lineCode) {
    // let title, url, desc, tags, icon, flag = ''; // declare vars used later
    let parts, indent = '';

    let shorten = lines[i].trim(); // use this var to view the line without whitespace

    switch (lineCode) {
        case '':   // print blank lines as-is
            output.value += '\n'
            break;
        case '//': 
        //b Skip Comment Lines ///////////////////////////////////////////
            // if a line ONLY contains a blank comment, we'll interpret that as a sort of separator line.
            if (shorten === "//") {
                let temp = "//////////////////////////////////////////////////////////////////////////////////////////////////// //"
                output.value +=  lines[i] + temp.substring(lines[i].length) + '\n';
                } else {
                    output.value += lines[i] + '\n'; // otherwise, just print the line
                }
            break;

        case '``': // print markdown as-is
            output.value += lines[i] + '\n'; // otherwise, just print the line
            break;
        
        //b If Statements ///////////////////////////////////////////
        case '* ':
            parts = lines[i].split('* ');
            indent = parts[0];
            output.value += indent + 'if (' + shorten.substring(2) + ') {    // IF STATEMENT\n';
            break;
            
        case '+ ':
            parts = lines[i].split('+ ');
            indent = parts[0];
            output.value += indent + '&& (' + shorten.substring(2) + ')    // Additional IF STATEMENT\n';
            break;
            
        case 'OR':
            parts = lines[i].split('OR');
            indent = parts[0];
            if (shorten === 'OR (logical)') {
                output.value += indent + '||    // (logical OR)\n';
            } else {
                output.value += indent + 'OR    // (filtered OR)\n';
            }
            break;

        //b Event Groups ////////////////////////////////////////////
        case '[ ':
            parts = lines[i].split('[ ');
            indent = parts[0];
            output.value += indent + shorten + ' // ANCHOR : ' + shorten + '\n';
            break;
            
        //b No LineCode ///////////////////////////////////////////
        default:
            // Add a trailing Semi-Colon to normal lines
            output.value += lines[i] + ';\n';
            break;
    }
    return;
}


//  ███████╗██╗███╗   ███╗██████╗ ██╗     ███████╗    ███╗   ███╗ ██████╗ ██████╗ ███████╗
//  ██╔════╝██║████╗ ████║██╔══██╗██║     ██╔════╝    ████╗ ████║██╔═══██╗██╔══██╗██╔════╝
//  ███████╗██║██╔████╔██║██████╔╝██║     █████╗      ██╔████╔██║██║   ██║██║  ██║█████╗  
//  ╚════██║██║██║╚██╔╝██║██╔═══╝ ██║     ██╔══╝      ██║╚██╔╝██║██║   ██║██║  ██║██╔══╝  
//  ███████║██║██║ ╚═╝ ██║██║     ███████╗███████╗    ██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗
//  ╚══════╝╚═╝╚═╝     ╚═╝╚═╝     ╚══════╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
function modeMFAtoJSSimple(lines, i, lineCode) {
    // let title, url, desc, tags, icon, flag = ''; // declare vars used later
    let parts, indent = '';

    let shorten = lines[i].trim(); // use this var to view the line without whitespace

    switch (lineCode) {
        case '':   // print blank lines as-is
            output.value += '\n'
            break;
        case '//': 
        //b Skip Comment Lines ///////////////////////////////////////////
            // if a line ONLY contains a blank comment, we'll interpret that as a sort of separator line.
            if (shorten === "//") {
                let temp = "//////////////////////////////////////////////////////////////////////////////////////////////////// //"
                output.value +=  
                    lines[i] + temp.substring(lines[i].length) + '\n' +
                    lines[i] + temp.substring(lines[i].length) + '\n';
                } else {
                    output.value += lines[i] + '\n'; // otherwise, just print the line
                }
            break;

        case '``': // print markdown as-is
            output.value += lines[i] + '\n'; // otherwise, just print the line
            break;
        
        //b If Statements ///////////////////////////////////////////
        case '* ':
            parts = lines[i].split('* ');
            indent = parts[0];
            output.value += indent + shorten + ' ==>\n';
            break;
            
        case '+ ':
            parts = lines[i].split('+ ');
            indent = parts[0];
            output.value += indent + shorten + ' ==>\n';
            break;

        case 'OR':
            parts = lines[i].split('OR');
            indent = parts[0];
            if (shorten === 'OR (logical)') {
                output.value += indent + '||    // (logical OR)\n';
            } else {
                output.value += indent + 'OR    // (filtered OR)\n';
            }
            break;

        //b Event Groups ////////////////////////////////////////////
        case '[ ':
            parts = lines[i].split('[ ');
            indent = parts[0];
            output.value += indent + shorten + ' // ANCHOR : ' + shorten + '\n';
            break;
            
        //b No LineCode ///////////////////////////////////////////
        default:
            // Add a trailing Semi-Colon to normal lines
            output.value += lines[i] + ';\n';
            break;
    }
    return;
}
