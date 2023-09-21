import style from "./CryptoIcon.module.css";
import React, { useEffect, useState } from "react";
import { Crypto } from "../../globalTypes";
import { CRYPTOS_URL } from "../../routes";

interface CryptoIconProps {
  cryptoID: number;
}

export default function CryptoIcon({ cryptoID }: CryptoIconProps) {
  const [crypto, setCrypto] = useState<Crypto>();

  const fetchCrypto = async () => {
    const response = await fetch(`${CRYPTOS_URL}/${cryptoID}`);
    const data = await response.json();

    setCrypto(data);
  };

  useEffect(() => {
    fetchCrypto();
  }, []);

  return (
    <div className={style["crypto-icon"]}>
      <img src={crypto?.icon.url} alt={crypto?.icon.alt} />
    </div>
  );
}
