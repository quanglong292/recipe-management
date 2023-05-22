import { IRecipe } from "../types/recipe.type"
import api from "./axios"

const getRecipe = async (): Promise<IRecipe[]> => {
    const data: IRecipe[] = await api.get("recipes")

    return data
}

export { getRecipe }