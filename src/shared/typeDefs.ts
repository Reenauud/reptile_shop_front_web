export type Category = {
    id: number;
    categoryName: string;
}

export type Reptile = {
    id: number;
    name: string;
}

type Upkeep = {
    difficulty: string;
    location: string;
    eatingPlan: string;
    dayCycle: string;
    hygrometry: string;
    dayTemperature: string;
    nightTemperature: string;
    upkeepInformations: string;
}

export type AnimalInfos = {
    name: string;
    scientificName: string;
    animalPicture: string;
    upkeep: Upkeep;
}

export type AuthContextType = {
    user: any;
    login: (email: string, password: string) => void;
    logout: () => void;
  };

export type AnimalForSale = {
    id: number;
    name: string;
    description: string;
    animalPicture: string;
    quantity: number;
    price: number;
}

export type EquipmentForSale = {
    id: number;
    equipmentName: string;
    equipmentDescription: string;
    equipmentDetails: string;
    equipmentPrice: number;
    equipmentPicture: string;
}

export type FoodForSale = {
    id: number;
    foodName: string;
    foodPrice: number;
    foodCategory: string;
    foodPicture: string;
}