import { useLoaderData } from "react-router-dom";

import Card from "../components/mini/card"

export async function allDataLoader()
{
    const data = await fetch('https://eocaxjrj5ifgi2b.m.pipedream.net');
    const jsonData = await data.json();
    return jsonData;
}

export default function Index( )
{

    const jsonData = useLoaderData();
    console.log(jsonData);
    return(
        <div className="grid md:grid-cols-4 gap-4">
                {
                    jsonData.map((card, index) => <Card key={index} data={card} /> )
                }
        </div>
    )
}