import React from 'react'
import "../styles/bio.css"

const Bio = () => {
  return (
    <div className='bio_container'>
      <img style={{width:"40vw"}} src='https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=2000&format=webply&optimize=medium' alt='imageofUser'/>
        <div style={{width:"40vw"}}>
            <h1>My Bio</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
    </div>

  )
}

export default Bio
