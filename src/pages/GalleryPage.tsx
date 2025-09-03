import ArtCardGrid from '../components/ArtCardGrid'
 
import { onePaintings,twoPaintings,threePaintings } from './Art/AcrylicOnCanvas'



const GalleryPage = () => {
  return (
    <div>
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
