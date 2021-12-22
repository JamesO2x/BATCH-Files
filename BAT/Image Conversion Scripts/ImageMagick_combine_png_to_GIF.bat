@REM  ImageMagick Script - PNG to GIF images
@REM  Useful Resources: 	https://legacy.imagemagick.org/Usage/anim_basics/
@REM  						https://justineuro.github.io/animatedGIFs/

@REM Download ImageMagick here: https://imagemagick.org/index.php

cd "C:\img\input"
convert -delay 2 -dispose previous *.png _output4.gif

@REM  cd 					== Change Directory, to the working directory of your INPUT files.
@REM  -delay 2 			== Sets delay to 20 milliseconds (not sure why it's 2, and not 20... but 20 was too slow.
@REM  -dispose previous 	== clears each frame so that it doesn't leave smearing (useful for transparent GIFs)
@REM  *.png				== Uses a wildcard: This script will grab EVERY PNG file in the directory, so it's important to name them in order (input_001.png)
@REM  _output4.gif			== The name of the GIF that will be rendered, literally just "_output4.gif" the _ at the front makes windows push it to the top of the file list.

@REM  That's it.