import style from "./TagBanner.module.css";

interface TagProps {
    categoryName: string;
    color: string;
}

export default function TagBanner({ categoryName, color }: TagProps) {
  return (
    <div className={`banner__tag banner__tag--${color}`}>
        <p>{categoryName}</p>
    </div>
  )
}
