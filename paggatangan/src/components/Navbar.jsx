import logo from '../assets/logo_black.svg';
import { Search, Heart, User, Handbag} from "lucide-react";

function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4'>
     
      <img src={logo} alt="Logo" className='h-16 w-auto'/>
   
      <ul className='flex gap-6'>
        <li>
          <a href=""className='text-gray-700 hover:text-black transition'>Home</a>
          </li>
        <li>
          <a href="" className='text-gray-700 hover:text-black transition'>New</a>
          </li>
        <li>
          <a href="" className='text-gray-700 hover:text-black transition'>Clothing</a>
          </li>
        <li>
          <a href="" className='text-gray-700 hover:text-black transition'>Footwear</a>
          </li>
        <li>
          <a href="" className='text-gray-700 hover:text-black transition'>Accessories</a>
          </li>
      </ul>

      <div className='flex gap-3 p-4'>
        <Search className='text-gray-700 hover:text-black transition' />
        <Heart className='text-gray-700 hover:text-black transition' />
        <User className='text-gray-700 hover:text-black transition' />
        <Handbag className='text-gray-700 hover:text-black transition' />
      </div>
  
    </nav>
  );
}

export default Navbar;