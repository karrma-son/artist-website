import ArtCardGrid from "../../components/ArtCardGrid"
import { printedMaterial } from "../../data/work/printed"

export default function PrintedPage(){
    return (
        <div>
            <h2> Printed Material </h2>
            <ArtCardGrid  artData={printedMaterial} />

        </div>
    )

}