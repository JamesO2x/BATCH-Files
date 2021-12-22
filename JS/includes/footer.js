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
    <!-- Ko-Fi Link Button -->
    <p>
        If you found this script useful, please consider dropping me a tip on Ko-Fi. I don't make much, and every little bit helps.
        <br />
        <script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script>
        <script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'K3K0OUUV'); kofiwidget2.draw();</script>
    </p>
    
    <p>This page and script designed by JamesO2 (2020), for use with the NeoCities hosting platform. Click the Logo below to go back to my site!</p>
    
    <h1>
        <a href="https://jameso2.neocities.org/">
            <img src="media/logo-pulse.gif" alt="jameso2.neocities.org">
        </a>
    </h1>
    
    <p>Last updated: 2021.05.08</p>
`);
