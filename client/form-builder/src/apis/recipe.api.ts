import { IForm } from "../types/form.type"
import api from "./axios"

export const createRecipe = async (body: IForm): Promise<IForm> => {
    const data: IForm = await api.post("recipes", body)
    return data
}