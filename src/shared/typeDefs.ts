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
    upkeep: Upkeep;
}