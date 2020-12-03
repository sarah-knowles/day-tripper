
import React from 'react'


function playVideo () {
const vid = 'https://cdn.videvo.net/videvo_files/video/free/2014-12/small_watermarked/Raindrops_Videvo_preview.webm'
  return (
<div class='fullscreen-video-wrap'>
<video src="vid"
autoplay='true'
loop='true'>
</video>
</div>
    )
  }



export default playVideo