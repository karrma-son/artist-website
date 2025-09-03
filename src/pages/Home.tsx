import { Link } from 'react-router-dom'
import ArtCardGrid from '../components/ArtCardGrid'
import {homePainting} from './Art/AcrylicOnCanvas'
import {homeDesign} from './Art/Design'
import SubmissionForm from '../components/SubmissionForm'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <br />
      <div>
        <br />
        <br />
        <h3>Welcome</h3>
        <h3>to the</h3>
         <h3>online gallery</h3>
         <h3> of</h3>
        <motion.h2
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
          viewport={{ once: true }}
          className="text-lg mt-8">
          Mason Karr
        </motion.h2>
     <br />
      <Link to="/art/Paintings">
      <ArtCardGrid artData={homePainting} />
      </Link>
      <Link to="/art/Design">
      <ArtCardGrid artData={homeDesign} />
      </Link>
       <motion.p
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg mt-8">
          Explore original works of art — painting, design, illustration, and more.
        </motion.p>
      <SubmissionForm></SubmissionForm>
    </div>
    </div>
  )
}
