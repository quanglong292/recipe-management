import React from 'react'
import { IRecipe } from '../types/recipe.type'
import Button from './Button'

type RecipeDetailType = {
    visible: boolean,
    data?: IRecipe,
    onCancel: () => void
}

const RecipeDetail: React.FC<RecipeDetailType> = ({ data, visible, onCancel }) => {
    if (!visible) return <></>

    return (
        <div className='z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-gray-400 h-screen bg-opacity-50 flex justify-center items-center text-black'>
            <div className='w-[80%] p-4 rounded-md bg-white'>
                <div className='flex justify-between items-center pb-4 border-b-2 mb-2'>
                    <div className='text-xl font-semibold'>Recipe Detail</div>
                    <div onClick={onCancel} className='border-[1px] border-black w-[24px] h-[24px] hover:cursor-pointer rounded-full flex items-center justify-center'>X</div>
                </div>
                <div className='text-xl font-semibold mb-2'>{data?.name}</div>
                <div className='mb-2'>
                    <p className='font-semibold'>Ingredients: </p>
                    <p className='pl-2 truncate'>{data?.ingredient}</p>
                </div>
                <div className='mb-2'>
                    <p className='font-semibold'>Instruction: </p>
                    <p className='pl-2 truncate'>{data?.instruction}</p>
                </div>
                <p className='font-semibold mb-2'>Serving: {data?.serving} </p>

                <div className='flex gap-4'>
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail