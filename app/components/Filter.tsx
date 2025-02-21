import React from 'react'

export const Filter = () => {
  return (
    <div className='my-10 flex flex-wrap gap-y-6 justify-between'>
        <div className='flex gap-6'>
            <select  id='type' className='bg-gray-200 text-gray-700 text-sm rounded-full px-4 py-2'>
                <option>Type</option>
                <option value={'men'}>men</option>
                <option value={'women'}>women</option>
                <option value={'kids'}>kids</option>
            </select>
            <input 
            name='minPrice'
            placeholder='min price' className='rounded-full w-24 text-sm px-4 py-2 ring ring-gray-200'></input>
            <input 
            name='maxPrice'
            placeholder='max price' className='rounded-full w-24 text-sm px-4 py-2 ring ring-gray-200'></input>
            <select  id='size' className='bg-gray-200 text-gray-700 rounded-full px-4 py-2'>
                <option>Size</option>
                <option value={'men'}>men</option>
                <option value={'women'}>women</option>
                <option value={'kids'}>kids</option>
            </select>
            <select  id='color' className='bg-gray-200 text-sm text-gray-700 rounded-full px-4 py-2'>
                <option>Color</option>
                <option value={'men'}>men</option>
                <option value={'women'}>women</option>
                <option value={'kids'}>kids</option>
            </select>
            <select  id='category' className='bg-gray-200 text-sm text-gray-700 rounded-full px-4 py-2'>
                <option>Category</option>
                <option value={'men'}>men</option>
                <option value={'women'}>women</option>
                <option value={'kids'}>kids</option>
            </select>
            <select  id='allFilters' className='bg-gray-200 text-sm text-gray-700 rounded-full px-4 py-2'>
                <option>All Filters</option>
                <option value={'men'}>men</option>
                <option value={'women'}>women</option>
                <option value={'kids'}>kids</option>
            </select>
        </div>
        <div>
        <select  id='sort' className='bg-white text-sm ring ring-gray-200 text-gray-700 rounded-full px-4 py-2'>
                <option>Sort By</option>
                <option value={'men'}>new</option>
                <option value={'women'}>women</option>
                <option value={'kids'}>kids</option>
            </select>
        </div>
    </div>
  )
}
