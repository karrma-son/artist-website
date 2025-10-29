import { allArtData } from "../../data/artData"

import ArtCardGrid from "../../components/ArtCardGrid"

export default function GalleryPage() {
  return (
    <div>
      <h1>Gallery</h1>
      <ArtCardGrid artData={allArtData} />
    </div>
  )
}