import { v4 as uuidv4 } from "uuid";
import { categories } from "./categories";

type criterion = {
    id: string;
    category: string;
    media: {
        url: string;
        alt: string;
    },
    name: string;
    description: string;
};

// Ne pas oublier de remplir les critères 
export const criterions: criterion[] = [
    {
        id: uuidv4(),
        category: categories[0],
        media: {
            url: require("../assets/img/sdgs/06.png"),
            alt: ""
        },
        name: "",
        description: "",
    }
];