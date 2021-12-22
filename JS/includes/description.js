// Use the backslash \ before any character to "escape it" (for example, single quotes)
//
// In VS Code, you can add a cursor to the end of every line like this:
// -- Press CTRL + A to select all of the text
// -- Press SHIFT + ALT + I to insert multiple cursors at the END of each line
// -- Press Home twice to jump to the start of every line
//
// Info Source: https://nickjanetakis.com/blog/insert-multiple-cursors-at-the-start-of-every-line-with-vscode

// How to highlight HTML inside JS, using extension found here:
// https://stackoverflow.com/questions/49166328/highlight-html-syntax-inside-string

document.write(
    /*html*/`
    <h2>How to Use this Tool:</h2>
    <p>Choose a Method to parse from the drop-down box above.</p>

    <ul>
        <li>Lulu\'s List A - Spaced Out (all the HTML is spaced and indented)</li>
        <li><strike>Lulu\'s List B - Slightly Condensed (the A and SPAN tags are condensed to single lines)</strike></li>
        <li><strike>Lulu\'s List C - Condensed to 1 Line (the whole line is condensed to 1 line of HTML)</strike></li>
        <li>Removed B & C styles to simplify testing.</li>
        <li>SpreadSheet Format (tab separated) - This will convert your list into a format that can be copy/pasted into a spreadsheet program and will fill the cells.</li>
        <li>HTML Table - will format your list into an HTML table instead of DIVs. (note, you have to manually add the TABLE and TBODY tags around your list -- you can do this in the input too.)</li>
        <li>JamesO2\'s Social Links List - Experimental rendering test.</li>
    </ul>

    <h2>INPUT FORMAT:</h2>
    <code>|| title || URL || description || tag1 tag2 etc</code>

    <ul>
        <li><code>||</code> = Start a list item line.</li>
        <li>(no <code>||</code> at start) = Plain HTML line (insert any normal HTML, or leave blank)</li>
        <li><code>//</code> = Line is ignored (blank line) (use for adding comments to your list)</li>
        <li><code>##</code> = Makes this line an H2 HTML tag.</li>
        <li>If you add an HTML comment <code>&lt;!-- Comment --&gt;</code> it will be added to the Output as-is. So you can do this if you\'d prefer your comments be publicly visible in your HTML.</li>
        <li>The "tags" (list filter tags, not HTML tags) at the end are separated by spaces so there can\'t be any spaces inside your "tags" (use hyphens instead). So tags like "music obscure media" would be interpetted as 3 tags, while "music obscure-media" is interpretted as 2 tags.</li>
    </ul>

    <hr />
    <p><strike>This tool is very "blank space sensitive" so make sure to add a single space before and after the Double-Pipe separators! (it literally interprets the whole text-string <code>" || "</code> as the separator, not just <code>"||"</code>)</strike></p>

    <p><strike>Do <em>not</em> add a space before the first <em>Double-Pipes</em> at the start of a line. And also do <em>not</em> add any <em>Double-Pipes</em> at the end of a line.</strike></p>

    <p>EDIT: 2021.05.10 - This white-space sensitivity has been fixed. You can now have spaces and tabs before the first "||". Also any extra spaces before or after other "||" separators will be trimmed out. Do note that the "tags" section is still space-sensitive, as that is how the classnames will be applied to the HTML.</p>

    <p>So this: <br>
        <code>|| &nbsp;&nbsp; paul mccartney &nbsp;&nbsp; || &nbsp;&nbsp; https://paulmccartney.com&nbsp;&nbsp; || &nbsp;&nbsp; My favorite underground musician, I think he\'s gonna be big someday. &nbsp;&nbsp; || &nbsp;&nbsp; music obscure-media</code>
    </p>
    <p>Should produce the same results as this: <br>
        <code>||paul mccartney||https://paulmccartney.com||My favorite underground musician, I think he\'s gonna be big someday.||music obscure-media</code>
    </p>
    <p>
        You can use any kind of visual spacing you like. The only thing that matters is that the first non-blank characters on a line should start with "||" so the script knows to convert it. Also, the indent you use at the beginning of a line (tabs or spaces before the first "||") will be preserved in the Output, so your generated HTML should be clean and organized -- properly indented as you like.
    </p>

    <hr />
`);
