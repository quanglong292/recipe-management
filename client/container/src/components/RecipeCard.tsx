import React, { memo } from 'react'
import { IRecipe } from '../types/recipe.type'
import Button from './Button'

type RecipeCardType = {
    item: IRecipe,
    onSelect?: (id: string) => void
}

const RecipeCard: React.FC<RecipeCardType> = memo(({ item, onSelect = () => {} }: RecipeCardType) => {
    return (
        <div className='bg-white rounded-md p-2 text-black'>
            <p className='font-bold border-b-2 pb-2 border-gray-300 text-lg'>{item.name}</p>
            <div className='mb-2'>
                <p className='font-semibold'>Ingredients: </p>
                <p className='pl-2 truncate'>{item.ingredient}</p>
            </div>
            <div className='mb-2'>
                <p className='font-semibold'>Instruction: </p>
                <p className='pl-2 truncate'>{item.instruction}</p>
            </div>
            <p className='font-semibold mb-2'>Serving: {item.serving} </p>
            <Button onClick={() => onSelect(item.id)}>Detail</Button>
        </div>
    )
})

export default RecipeCard