import Card from "../components/mini/card"
import localforage from "localforage"
import { useLoaderData } from "react-router-dom";

export async function donationDataLoader()
{
    const data = await localforage.getItem('donations');
    console.log('donations,', data)
    return { data};
}

export default function Donations()
{
    const {data} = useLoaderData();
    return(
        <div className="grid md:grid-cols-4 gap-4">
                {
                data.map((card, index) => <Card key={index} data={card} /> )
                }
        </div>
    )
}