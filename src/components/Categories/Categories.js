import { CategoryCard } from "components";
import { categories } from "data/categories";
import "./Categories.css";

export const Categories = () => {
  return (
    <section className="section category">
      {categories.map(({ _id, image, categoryName }) => {
        return (
          <CategoryCard key={_id} image={image} categoryName={categoryName} />
        );
      })}
    </section>
  );
};
