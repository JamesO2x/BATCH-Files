:: ImageMagick Script - PNG to GIF images
:: Useful Resources: 	https://legacy.imagemagick.org/Usage/anim_basics/
:: 						https://justineuro.github.io/animatedGIFs/

cd "C:\xampp\htdocs\img\_WIP\SnS\input"
convert -delay 2 -dispose previous *.png _output4.gif

:: cd 					== Change Directory, to the working directory of your INPUT files.
:: -delay 2 			== Sets delay to 20 milliseconds (not sure why it's 2, and not 20... but 20 was too slow.
:: -dispose previous 	== clears each frame so that it doesn't leave smearing (useful for transparent GIFs)
:: *.png				== Uses a wildcard: This script will grab EVERY PNG file in the directory, so it's important to name them in order (input_001.png)
:: _output4.gif			== The name of the GIF that will be rendered, literally just "_output4.gif" the _ at the front makes windows push it to the top of the file list.

:: That's it.