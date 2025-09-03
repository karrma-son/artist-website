import { Link } from 'react-router-dom'
import ArtCardGrid from '../components/ArtCardGrid'
import {homePainting} from './Art/AcrylicOnCanvas'
import {homeDesign} from './Art/Design'
import SubmissionForm from '../components/SubmissionForm'

export default function Home() {
  return (
    <div>
      <br />
      <div>
        <h3>Welcome</h3>
        <h3>to the</h3>
         <h3>online gallery</h3>
         <h3> of</h3>
        <h2>Mason Karr</h2>
     <br />
      <Link to="/art/Paintings">
      <ArtCardGrid artData={homePainting} />
      </Link>
      <Link to="/art/Design">
      <ArtCardGrid artData={homeDesign} />
      </Link>
       <p>Explore original works of art — painting, design, illustration, and more.</p>
      <SubmissionForm></SubmissionForm>
    </div>
    </div>
  )
}
