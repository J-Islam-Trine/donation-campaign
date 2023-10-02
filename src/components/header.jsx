
import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.png'

//components
import NavElement from './mini/navItem'

const Header = () => {
  const navItems = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Donations',
      path: '/donations'
    },
    {
      text: 'statistics',
      path: '/stats'
    }
  ]

    return(
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <figure>
          <img className='w-1/2' src={Logo} alt="" />
        </figure>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-4">
          {
            navItems.map(navItem => <Link className='text-very-dark-grey text-xl' to={navItem.path}>{navItem.text}</Link>)
          }
        </ul>
      </div>
    </div>
          
    )
}

export default Header