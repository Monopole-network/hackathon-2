import style from "./TagBanner.module.css";

interface TagProps {
    categoryName: string;
    classColor: string;
}

export default function TagBanner({ categoryName, classColor }: TagProps) {
  return (
    <div className={`banner__tag ${classColor}`}>
        <p>{categoryName}</p>
    </div>
  )
}
