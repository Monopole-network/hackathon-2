import style from "./HeroBanner.module.css";
import GoBackButton from "../GoBackButton";

// informations besoin 

interface HeroBannerProps {
    link: string;
    title: string;
    description: string;
    nomEntreprise: string;
}

export default function HeroBanner({ link, title, description, nomEntreprise }: HeroBannerProps) {
  return (
    <div className="banner">
        <GoBackButton path="" />
        <img className="banner__img" src={link} alt="texte alt" />
        <div>
            <h3 className="banner__title">{title}</h3>
            <p className="banner__description">{description}</p>
            <h4 className="banner__entreprise">{nomEntreprise}</h4>
        </div>
    </div>
  )
}
