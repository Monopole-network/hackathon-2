import style from "./TagCategory.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Category, filters } from "../../globalTypes";
import { CATEGORIES_URL } from "../../routes";
import { useColorModeValue } from "@chakra-ui/react";

interface TagCategoryProps {
  categoryID: number;
  isSelected?: boolean;
  filters?: filters;
  setFilters?: Dispatch<SetStateAction<filters>>;
  large?: boolean;
}

export default function TagCategory({ categoryID, isSelected, filters, setFilters, large }: TagCategoryProps) {
  const [category, setCategory] = useState<Category>();
  const textColor = useColorModeValue("#1A202C", "#fff");

  const fetchCategory = async () => {
    const response = await fetch(`${CATEGORIES_URL}/${categoryID}`);
    const data = await response.json();

    setCategory(data);
  };

  const handleClick = () => {
    if (setFilters) {
      if (filters?.categories.includes(categoryID)) {
        const categoriesCopy = [...filters.categories];
        const index = categoriesCopy.findIndex((cat) => cat === categoryID);
        categoriesCopy.splice(index, 1);
        setFilters({ ...filters, categories: categoriesCopy });
        return;
      }

      setFilters({ ...filters!, categories: [...filters?.categories!, categoryID] });
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: isSelected ? "transparent" : category?.color,
        ...(isSelected && { border: `1px solid ${category?.color}` }),
      }}
      className={large ? `${style["tag-category"]} ${style["tag-category--large"]}` : style["tag-category"]}
    >
      <p {...(large && isSelected && { style: { color: textColor } })} className={style["tag-category__name"]}>
        {category?.name}
      </p>
    </div>
  );
}
