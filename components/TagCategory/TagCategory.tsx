import style from "./TagCategory.module.css";
import { useEffect, useState } from "react";
import { Category } from "../../globalTypes";
import { CATEGORIES_URL } from "../../routes";

interface TagCategoryProps {
  categoryID: number;
  large?: boolean;
}

export default function TagCategory({ categoryID, large }: TagCategoryProps) {
  const [category, setCategory] = useState<Category>();

  const fetchCategory = async () => {
    const response = await fetch(`${CATEGORIES_URL}/${categoryID}`);
    const data = await response.json();

    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div
      style={{ backgroundColor: category?.color }}
      className={large ? `${style["tag-category"]} ${style["tag-category--large"]}` : style["tag-category"]}
    >
      <p className={style["tag-category__name"]}>{category?.name}</p>
    </div>
  );
}
