import style from "./ChartCard.module.css";
import TagCategory from "../TagCategory/TagCategory";
import CryptoIcon from "../CryptoIcon/CryptoIcon";
import { Media } from "../../globalTypes";
import { useEffect, useState } from "react";
import { Company } from "../../globalTypes";
import { COMPANIES_URL } from "../../routes";
import { DoughnutChart } from "../DoughnutChart";
import SeeAllButton from "../SeeAllButton";

interface ChartCardProps {
/*   media: Media; */
  CatName: string;
  TxtResult: string;
  percent: number
}

export default function ChartCard({ CatName, TxtResult, percent}: ChartCardProps) {

  return (
    <div className={style["chart-card"]}>
      <div>
      <h3 className={style["chart-card__Cat-name"]}>{CatName}</h3>
      <p className={style["chart-card__txt-result"]}>{TxtResult}</p>
      </div>
      <div className={style["doughnut-chart"]}>
      <DoughnutChart/>
      <p className={style["chart-card__percent"]}>{percent}%</p>
      </div>
      <SeeAllButton path="" /> {/* ajouter link vers une page détails */}
    </div>
  );
}
