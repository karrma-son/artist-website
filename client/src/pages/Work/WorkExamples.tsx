import ArtCardGrid from "../../components/ArtCardGrid"
import { workExamples } from "../../data/work"
// import { Link } from "react-router-dom"


export default function ExamplePage() {
  return (
    <div>    
   
      <h2 > Work Examples </h2>
       {/* <Link 
      to = "/Printed" 
      className="work-card text-violet-600  text-9xl hover:text-purple-400 "> 
      Printed
      </Link>
      <div className = "mt-100 mb-10 "></div>
      <br />
      <Link to = "/Pillows" className="work-card text-violet-600 text-9xl hover:text-purple-400 mt-100"> 
      Pillows
      </Link>
    */}
     
      <ArtCardGrid artData={workExamples} />
  
    </div>

  )
}