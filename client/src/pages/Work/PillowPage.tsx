import ArtCardGrid from "../../components/ArtCardGrid"
import { pillowExamples } from "../../data/work/pillows"

export default function PillowPage(){
    return (
        <div>
            <h2> Pillows </h2>
            <ArtCardGrid  artData={pillowExamples} />

        </div>
    )

}