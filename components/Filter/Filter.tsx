import style from "./Filter.module.css";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Crypto, Label, filterTypes, filters } from "../../globalTypes";
import { CRYPTOS_URL, LABELS_URL } from "../../routes";
import { useColorModeValue } from "@chakra-ui/react";

interface FilterProps {
  filterType: filterTypes.crypto | filterTypes.label;
  filters: filters;
  setFilters: Dispatch<SetStateAction<filters>>;
}

export default function Filter({ filterType, filters, setFilters }: FilterProps) {
  const [options, setOptions] = useState<Crypto[] | Label[]>();
  const bgColor = useColorModeValue("rgba(0, 0, 0, 0.5)", "#000126");

  const fetchDataFilter = async (URL: string) => {
    const response = await fetch(URL);
    const data = await response.json();
    setOptions(data);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterID: number = Number(e.target.value);

    if (filterID) {
      setFilters({ ...filters, [filterType]: filterID });
      return;
    }

    setFilters({ ...filters, [filterType]: undefined });
  };

  useEffect(() => {
    switch (filterType) {
      case filterTypes.crypto:
        fetchDataFilter(CRYPTOS_URL);
        break;

      case filterTypes.label:
        fetchDataFilter(LABELS_URL);
        break;

      default:
        break;
    }
  }, []);

  return (
    <select
      style={{ backgroundColor: bgColor }}
      className={style["filter"]}
      onChange={handleSelect}
      name={`filter-${filterType}`}
    >
      <option>{filterType === filterTypes.crypto ? "Blockchain" : "Labels"}</option>
      {options?.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
