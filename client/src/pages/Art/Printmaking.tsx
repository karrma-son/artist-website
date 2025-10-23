import ArtCardGrid from "../../components/ArtCardGrid"
import { printData } from "../../data/printmaking/2011-2015"

export default function PaintingsPage() {
  return (
    <div>
      <h1>Paintings</h1>
      <ArtCardGrid artData={printData} />
    </div>
  )
}
