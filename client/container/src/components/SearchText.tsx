import React, { memo } from 'react'

type SearchTextProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  value: undefined | string,
  placeholder?: string,
}

const SearchText: React.FC<SearchTextProps> = memo((props: SearchTextProps) => {
  return (
    <div className='w-full'>
      <div className='text-2xl font-semibold mb-2'>Search your recipes:</div>
      <input className='w-full focus:outline-none border-b-2 border-white text-white bg-transparent' type='text' {...props} />
    </div>
  )
})

export default SearchText