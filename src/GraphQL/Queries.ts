import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
query GetAllCategories {
    getAllCategories {
        id
        categoryName
    }
}`;

export const GET_ANIMALS_BY_CATEGORY = gql`
query GetAnimalsByCategory($categoryName: String!) {
    getAnimalsByCategory(categoryName: $categoryName) {
        id
        name
    }
}`;

export const GET_ANIMAL_UPKEEP_DETAILS = gql`
query GetUpkeepByAnimal($animal: String!) {
    getUpkeepByAnimal(animal: $animal) {
        name
        scientificName
        upkeep {
          difficulty
          location
          eatingPlan
          dayCycle
          hygrometry
          dayTemperature
          nightTemperature
          upkeepInformations
        }
    }
  }`;