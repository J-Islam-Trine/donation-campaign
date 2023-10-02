import localforage from "localforage"
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GlobalContext } from "../contexts/allData";

import StatPie from "../components/chart";

export async function statDataLoader()
{
    const data = await localforage.getItem('donations');
    const uniqueValues = [new Set(data)];
    const numberOfDonations = uniqueValues.length;
    console.log(uniqueValues.length);
    return {numberOfDonations}
}

export default function Stats()
{
    const {numberOfDonations} = useLoaderData();
    const {mainData} = useContext(GlobalContext);
    const [details, setDetails] = useState(mainData);

    return(
        <div>
            <StatPie total={details.length} donations={numberOfDonations} />
            <h3 className="text-3xl">Total project: {details.length} </h3>
            <h3 className="text-3xl">Donation So far: {numberOfDonations} </h3>


        </div>
    )
}