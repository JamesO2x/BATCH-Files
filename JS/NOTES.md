# Notes on my PipeList JS Scripts
Looking back at this now, it makes some heavy use of Switch/Case. I'd like to clean this up and make it more function-based.

Ideally, each "method of conversion" could be its own JS script file that contains just that code. That way each file is "modular".

Then, I can either just require all of those JS files in one "main js" file, or in the INDEX.html file directly.

# Some things ToDo in the future:
- [ ] Setup the "option box" to pull options from a JSON file. This way I can have all the info in one place.
- [ ] Set the "sample text" from external files. (maybe link them in the JSON too)
- [ ] Have the page display the "format" of the input text in the table somewhere (also stored in JSON)
  - [x] I currently added this MANUALLY, but it doesn't update dynamically or anything
  - [ ] Stored in JSON
  - [ ] Powered by JS


# Last Worked On:
2021.12.23

I got the CodeMirror boxes to work on their own document `_CodeMIrror_TEST.html`  
But I couldn't get it to work in my Table layout `index-cm.html`.

I've left these two files as experiments. The original `index.html` should still be working.