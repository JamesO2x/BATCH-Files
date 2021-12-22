# Notes on my PipeList JS Scripts
Looking back at this now, it makes some heavy use of Switch/Case. I'd like to clean this up and make it more function-based.

Ideally, each "method of conversion" could be its own JS script file that contains just that code. That way each file is "modular".

Then, I can either just require all of those JS files in one "main js" file, or in the INDEX.html file directly.