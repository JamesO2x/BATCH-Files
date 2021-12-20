@REM Source Help: https://unix.stackexchange.com/questions/40638/how-to-do-i-convert-an-animated-gif-to-an-mp4-or-mv4-on-the-command-line
@REM Looping Syntax: https://video.stackexchange.com/questions/12905/repeat-loop-input-video-with-ffmpeg

@REM A value of "-stream_loop 2" will loop 3 times (2 additional loops)
ffmpeg -stream_loop 2 -i input.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" outputvideo.mp4

PAUSE
EXIT
