import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
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

    const categoryObjects = categories.filter(category => category.CategoryName !== undefined);
    return (
        <div >
            <h2 className=' text-black font-bold text-2xl md:text-3xl mb-2'>All Categories ({uniqueCategories.length})</h2>
            <div className='rounded-2xl flex flex-col w-[65%]'>
                {
                    uniqueCategories.map((category,index) =>{
                        const categoryObj = categoryObjects.find(cat => cat.CategoryName === category); 
                        return(
                    <NavLink to ={`/category/${categoryObj?.ID}`} key={index} className="m-2 p-2 bg-blue-400 text-white text-center hover:text-black rounded-2xl text-medium text-xl">{category}</NavLink> );
                })
            }
            </div>
        </div>
    );
};

export default LeftCategory;