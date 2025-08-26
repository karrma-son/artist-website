import ArtCardGrid from '../components/ArtCardGrid'
import {twoPaintings} from './Art/Acrylic on Canvas'
import SubmissionForm from '../components/SubmissionForm'

export default function Home() {
  return (
    <div>
      <br />
      <div>
        <h2>Welcome</h2>
        <h3>to</h3>
      <h3>Mason Karr's Gallery</h3>
      <p>Explore original works of art — painting, design, illustration, and more.</p>
      <ArtCardGrid artData={twoPaintings} />
      <SubmissionForm></SubmissionForm>
    </div>
    </div>
  )
}
