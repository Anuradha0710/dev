import React from 'react'
import Img1 from './resources/download.jpg'
import Img2 from './resources/89170584-bonne-petite-fille-avec-des-feuilles-d-automne-dans-le-parc.jpg'
import Img3 from './resources/pretty-girl-with-cup-hot-drink-smiles-forest-autumn_116317-383.avif'
import Img4 from './resources/free-images.avif'



const PhotoDisplayer = () => {
  return (
    <div>
        <img src={Img1} style=
        {{width:"200px",
        height:"200px"}} alt='..'/>

      <img src={Img2} style=
        {{width:"200px",
        height:"200px"}} alt='..' />

      <img src={Img3} style=
        {{width:"200px",
        height:"200px"}} alt='..' />

      <img src={Img4} style=
        {{width:"200px",
        height:"200px"}} alt='..' />


        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUslYsdkSfAX
        CWFDH2k_JelrK_tzLGWHSgyKOjIMKswKqEUmPqK5f3XaoTxiecOVVnug&usqp=CAU" alt=".." />
       */}
    </div>
  )
}

export default PhotoDisplayer
