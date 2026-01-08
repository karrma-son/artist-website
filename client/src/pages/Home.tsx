
import ArtScroller from '../components/ArtScroller'
import SubmissionForm from '../components/SubmissionForm'
import { motion } from 'framer-motion'

  type HomeProps = {
  artistName: string;
  introText?: string;
  introWorks?: string;
  outroWorks?: string;
  highlightMessage?: string;
}

export default function  Home({
  artistName,
  introText,
  introWorks,
  outroWorks,
  highlightMessage,
}:HomeProps) {
  return (
    <div className='flex flex-wrap justify-center items-center z-0' >
      <br />
      <div>
      <br />
      <br />
      <motion.div
        initial={{y: -90, opacity: 0 }}
        animate={{y:-90, opacity:.5}}
        whileInView={{ y: 0, opacity: .4 }}
        transition={{ duration: 2.5, ease:"circIn" }}
        viewport={{ once: true }}>
        <h3>{highlightMessage}</h3>
      </motion.div>
      <motion.h2
        initial={{ y:150, opacity: 0 }}
        animate={{y:50, opacity:.3}}
        whileInView={{y: 0, opacity: .9 }}
        transition={{ duration: 2.5 , ease: "circIn" }}
        viewport={{ once: true }}
        className="text-9xl mt-8">
        {artistName}
      </motion.h2>
      <br />
      <ArtScroller></ArtScroller>
      <motion.p
        initial={{ x: 200, opacity: 0 }}
        animate={{ x:50, opacity:.5}}
        whileInView={{ x: 0, opacity: .5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:text-4xl mt-8 ">
        {introText}
      </motion.p>
      <motion.p
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: .4 }}
        transition={{ duration: 2, ease: "easeIn" }}
        viewport={{ once: true }}
        className="md:text-9xl mt-8 sm:text-5xl mt-8">
        {introWorks}
      </motion.p>
      <motion.p
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: .4 }}
        transition={{ duration: 2, ease:"easeOut"}}
        viewport={{ once: true }}
        className="md:text-9xl mt-8 sm:text-5xl">
        {outroWorks}
      </motion.p>
      <SubmissionForm></SubmissionForm>
    </div>
    </div>
  )
}
