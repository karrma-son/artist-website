import ArtCardGrid from '../components/ArtCardGrid'
import {onePaintings, twoPaintings, threePaintings} from './Art/Acrylic on Canvas'




const GalleryPage = () => {
  return (
    <div>
      <h1>Gallery </h1>
      <h2>2020</h2>
      <ArtCardGrid artData={onePaintings} />
      <h2>2021</h2>
      <ArtCardGrid artData={twoPaintings} />
      <br></br>
      <h2>2022</h2>
      <ArtCardGrid artData={threePaintings} />
      <br></br>
      <h2>2023</h2>
      <br></br>
      <h2>2024</h2>
      <br></br>
    </div>
  )
}

export default GalleryPage
