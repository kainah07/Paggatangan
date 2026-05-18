import logo from '../assets/logo_black.svg';
import { Search, Heart, User, Handbag} from "lucide-react";

function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4'>
     
      <img src={logo} alt="Logo" className='h-16 w-auto'/>
   
      <ul className='flex gap-6'>
        <li><a href="">Home</a></li>
        <li><a href="">New</a></li>
        <li><a href="">Clothing</a></li>
        <li><a href="">Footwear</a></li>
        <li><a href="">Accessories</a></li>
      </ul>

      <div className='flex gap-3 p-4'>
        <Search />
        <Heart />
        <User />
        <Handbag />
      </div>
  
    </nav>
  );
}

export default Navbar;