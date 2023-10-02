//import elements
import { Outlet } from 'react-router-dom'

import { useLoaderData } from "react-router-dom";

import { GlobalContext } from '../contexts/allData';

import Header from '../components/header'
import Footer from '../components/footer'
import { useState, useEffect } from 'react';



export async function mainDataLoader()
{
    const data = await fetch('https://eocaxjrj5ifgi2b.m.pipedream.net');
    const jsonData = await data.json();
    return jsonData;
}

export default function Root()
{
    const mainData = useLoaderData();
    console.log(mainData);
    const [data, setData] = useState([]);
    useEffect(()=> {
        function loadData()
        {
            
        setData(mainData);
        }
        loadData();
    }, [])

    return(
        <div className=' md:max-w-5xl mx-auto mt-8'>
            <Header />
           <GlobalContext.Provider value={{mainData}}>
           <div className=" min-h-screen mt-8">
                <Outlet />
            </div>
           </GlobalContext.Provider>
            <Footer />
        </div>
    )
}