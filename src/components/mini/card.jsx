import { useContext } from "react";
import { GlobalContext } from "../../contexts/allData";
import { useNavigate } from "react-router-dom";

export default function Card({data})
{
    const allData = useContext(GlobalContext);
    const navigate = useNavigate();
    console.log(data);
    console.log(allData, 'is here');
    let cardData = {...data};
    return(
        <div className={`card rounded-md`} style={{backgroundColor: cardData.primaryColor, }} onClick={() => navigate(`/projects/${cardData.id}`)}>
  <figure><img className=" w-full h-36" src={cardData.image_url} alt={cardData.description} /></figure>
  <div className="card-body p-0 pt-4 px-2 pb-2">
  <div className="badge badge-neutral font-bold rounded-none border-0" style={{backgroundColor: cardData.tertiaryColor}}>{cardData.category}</div>
    <h2 className="card-title text-md" style={{color: cardData.secondaryColor}}>
     {cardData.title}
    </h2>
  </div>
</div>
    )
}