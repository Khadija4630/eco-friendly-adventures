import {useEffect, useState} from 'react';
const LeftCategory = () => {
    const [categories, setCategories] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    useEffect(() =>{
        fetch('adventures.json')
        .then(res => res.json())
        .then(data =>{
            setCategories(data);
            const categoryNames= [...new Set(data.map(item => item.CategoryName))];
            console.log("Unique Categories:", categoryNames);
            setUniqueCategories(categoryNames);
        });
    },[] )
    return (
        <div >
            <h2 className=' text-black font-bold text-2xl md:text-3xl mb-2'>All Categories ({uniqueCategories.length})</h2>
            <div className='rounded-2xl flex flex-col w-[65%]'>
                {
                    uniqueCategories.map((category,index) => <button key={index} className="m-2 p-2 bg-blue-400 text-white rounded-2xl text-medium text-xl">{category}</button> )
                }
            </div>
        </div>
    );
};

export default LeftCategory;