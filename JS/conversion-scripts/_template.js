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
            
            break;
    
        //b Headers ///////////////////////////////////////////
        case '##':
            
            break;
    
        //b Main List Item type ///////////////////////////////////////////
        case '||':
            
            break;
        
        //b No LineCode ///////////////////////////////////////////
        default:
            // Just output the line if it's not marked with a "Line Code"
            output.value += lines[i] + '\n';
            break;
    }
    return;
}
