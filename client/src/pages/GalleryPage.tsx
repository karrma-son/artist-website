import ArtCardGrid from '../components/ArtCardGrid'
 
import {paintings2018, paintings2020, paintings2021, paintings2022 } from '../data';



const GalleryPage = () => {
  return (
    <div className= "">
      <h2>2018</h2>
      <ArtCardGrid artData={paintings2018} />
      <h2>2020</h2>
      <ArtCardGrid artData={paintings2020} />
      <h2>2021</h2>
      <ArtCardGrid artData={paintings2021} />
      <br></br>
      <h2>2022</h2>
      <ArtCardGrid artData={paintings2022} />
      <br></br>
      <h2>2023</h2>
      <br></br>
      <h2>2024</h2>
      <br></br>
    </div>
  )
}

export default GalleryPage
