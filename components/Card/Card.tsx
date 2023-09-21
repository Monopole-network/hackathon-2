import style from "./Card.module.css";
import TagCategory from "../TagCategory/TagCategory";
import CryptoIcon from "../CryptoIcon/CryptoIcon";
import { Media } from "../../globalTypes";
import { useEffect, useState } from "react";
import { Company } from "../../globalTypes";
import { COMPANIES_URL } from "../../routes";

interface CardProps {
  media: Media;
  projectName: string;
  companyID: number;
  description: string;
  cryptosID: number[];
  categoriesID: number[];
}

export default function Card({ media, projectName, companyID, description, cryptosID, categoriesID }: CardProps) {
  const [company, setCompany] = useState<Company>();

  const fetchCompanies = async () => {
    const response = await fetch(`${COMPANIES_URL}/${companyID}`);
    const data = await response.json();

    setCompany(data);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${media.url})` }} className={style["card-project"]}>
      <div className={style["card-project-arrow"]}>
        <img src="/assets/svg/white_arrow.svg" alt="flèche" />
      </div>
      <p className={style["card-project__name"]}>{projectName}</p>
      <p className={style["card-project__company"]}>{company?.companyName}</p>
      <div className={style["card-project-cryptos"]}>
        {cryptosID.map((cryptoID) => (
          <CryptoIcon key={cryptoID} cryptoID={cryptoID} />
        ))}
      </div>
      <p className={style["card-project-overlay__description"]}>{description}</p>
      <div className={style["card-project-categories"]}>
        {categoriesID.map((categoryID) => (
          <TagCategory key={categoryID} categoryID={categoryID} />
        ))}
      </div>
      <div className={style["card-project-overlay"]}></div>
    </div>
  );
}
