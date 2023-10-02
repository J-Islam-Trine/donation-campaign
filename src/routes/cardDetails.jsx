import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GlobalContext} from "../contexts/allData"

import localforage from "localforage";

export async function projectDataLoader({params})
{
    const projectId = params.projectId;
    console.log(projectId);
    return {projectId};
}

export default function Projects()
{
    const {projectId} = useLoaderData();
    const {mainData} = useContext(GlobalContext);
    const [details, setDetails] = useState(mainData);
    const [cardData, setCardData] = useState({});
    // const singleData = allProjectData.filter(project => project.id == projectId);
    useEffect(()=>{
          const projectData = details.filter(project => project.id == projectId);
          console.log(projectData);
          setCardData(projectData[0]);
    }, [details])
    
    async function handleDonate()
    {
      try {
        const donations = await localforage.getItem('donations');
        if (donations)
        {
          let newValue = [...donations, cardData];
          await localforage.setItem('donations', newValue);
        }
        else
        {
          await localforage.setItem('donations', [cardData]);
        }
        
        // This code runs once the value has been loaded
        // from the offline store.
        // console.log(value);
    } catch (err) {
        // This code runs if there were any errors.
        console.log(err);
    }
    }

    return(
       <div>
        <div className="join flex-col">
        <figure>
          <img className="h-1/3 w-full" src={cardData.image_url} alt="" />

        </figure>
        
        <div className="bg-very-dark-grey bg-opacity-50 p-4 h-24 -mt-24">
          <button className="bg-light-red text-white px-6 py-4" onClick={()=> handleDonate()}>Donate ${details[0].price}</button>
        </div>
</div>
<div className="mt-16">
  <h3 className="text-very-dark-grey font-bold text-4xl mb-4">{cardData.title}</h3>
  <h3 className=" leading-7 text-very-dark-grey">{cardData.description}</h3>
</div>
       </div>
    )
}