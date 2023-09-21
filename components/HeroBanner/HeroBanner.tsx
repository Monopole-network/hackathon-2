import style from "./HeroBanner.module.css";
import GoBackButton from "../GoBackButton";
import TagBanner from "../TagBanner/TagBanner";

// informations besoin 

interface HeroBannerProps {
    link: string;
    title: string;
    nomEntreprise: string;
    colorTag: string;
    categoryText: string;
}

export default function HeroBanner({ link, title, nomEntreprise, colorTag, categoryText }: HeroBannerProps) {
  return (
    <div className="banner">
        <GoBackButton path="" />
        <div className="banner__img">
            <img src={link} alt="texte alt" />
        </div>
        <div className="banner__wrapper">
            <h3 className="banner__title">{title}</h3>
            <h4 className="banner__entreprise">{nomEntreprise}</h4>
            <TagBanner color={colorTag} categoryName={categoryText} />
        </div>
    </div>
  )
}
