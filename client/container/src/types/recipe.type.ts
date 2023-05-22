interface IRecipe {
    id: string,
    name?: string,
    serving?: number,
    ingredient?: string,
    instruction?: string
}

export { type IRecipe }