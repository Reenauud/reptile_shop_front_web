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
        animalPicture
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

  export const GET_ALL_ANIMALS = gql`
  query GetAllRetiles {
    getAllReptiles {
        id
        name
        description
        animalPicture
        quantity
        price
    }
  }`

  export const GET_ALL_EQUIPMENTS = gql`
  query GetAllEquipments {
    getAllEquipments {
      id
      equipmentName
      equipmentDescription
      equipmentPrice
      equipmentDetails
      equipmentPicture
    }
  }`

  export const GET_FOOD_LIST = gql`
  query GetFoodList {
      getFoodList {
          id
          foodName
          foodPrice
          foodCategory
          foodPicture
        }
    }`;