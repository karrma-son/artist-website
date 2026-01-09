import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Category } from "../types/category";

type ArtCategoryCardProps = {
  category: Category;
};

export default function ArtCategoryCard({ category }: ArtCategoryCardProps) {
  return (
    <motion.div
      className="relative min-w-[450px] h-[275px] rounded-3xl overflow-hidden
                 shadow-gray-800 border-zinc-800 border-4 cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <Link to={category.path}>
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span
            className="text-fuchsia-200 hover:text-fuchsia-300 text-6xl font-semibold bg-gray-900/90 px-6 py-2 rounded-xl"
          >
            {category.name}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
