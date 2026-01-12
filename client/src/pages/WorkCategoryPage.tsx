import { useParams } from "react-router-dom"
import ArtCardGrid from "../components/ArtCardGrid"
import { workExamples } from "../data/work"

export default function WorkCategoryPage() {
  const { category } = useParams<{ category: string }>()

  const filteredWork = workExamples.filter(
    art => art.category === category
  )

  if (!filteredWork.length) {
    return <p>No work found for this category.</p>
  }

  return (
    <section>
      <h2 className="text-4xl mb-6 capitalize">
        {category?.replace("-", " ")}
      </h2>

      <ArtCardGrid artData={filteredWork} />
    </section>
  )
}