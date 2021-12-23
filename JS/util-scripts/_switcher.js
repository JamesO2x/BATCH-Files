// This Function triggers when you CHANGE the Option Box.
function change(mode){
    // Change option using "onchange" - sets some default parameters.
    switch(mode) {
        case 'hr_1':
            // Placeholder
            console.log(mode + " - PLACEHOLDER")
            break;
        case 'LuLu_ListA':
            // Lulu's Link List Format
            console.log(mode + " - Lulu's List A")
            break;
        case 'html_table':
            // Lulu's Link List Format
            console.log(mode + " - HTML Table Mode")
            break;
        case 'JO2_SocialLinks':
            // JamesO2's Social Links List Format
            console.log(mode + " - JamesO2's Social Links List")
            break;
        case 'text_TSV':
            // Plain Text Format
            console.log(mode + " - Plain Text Mode")
            break;
        default:
            // no default
    }
}
