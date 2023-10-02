import { Link } from 'react-router-dom'

export default function NavElement({navElementText, navElementPath})
{
    return(
        <Link className=" text-xl font-normal " to={navElementPath}>{navElementText}</Link>
    )
}