
import ArtScroller from '../components/ArtScroller'
import SubmissionForm from '../components/SubmissionForm'
import { motion } from 'framer-motion'

type HomeProps = {
  artistName: string
  introText?: string
  highlightMessage?: string
}

export default function  Home({
  artistName,
  introText = "Explore original works of art — painting, design, illustration, and more.",
  highlightMessage = "Welcome to the online gallery of",
}: HomeProps) {
  return (
    <div className='flex flex-wrap justify-center items-center ' >
      <br />
      <div>
        <br />
        <br />
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
          viewport={{ once: true }}>
        <h3>{highlightMessage}</h3>
        </motion.div>

        
        <motion.h2
          initial={{ z: 200, opacity: 0 }}
          whileInView={{ z: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeIn" }}
          viewport={{ once: true }}
          className="text-lg mt-8">
          {artistName}
        </motion.h2>
     <br />
      <ArtScroller></ArtScroller>
       <motion.p
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg mt-8">
          {introText}
        </motion.p>
      <SubmissionForm></SubmissionForm>
    </div>
    </div>
  )
}
