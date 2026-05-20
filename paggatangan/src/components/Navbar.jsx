import logo from '../assets/logo_black.svg';
import { navigation } from '../data/navigation';
import { actions } from '../data/navigation';

function Navbar() {
  return (
    <nav className='flex items-center justify-between p-3'>
     
      <img src={logo} alt="Logo" className='h-16 w-auto'/>

      <ul className='flex gap-6'>
        {navigation.map((item) => (
          <li key={item.name} className='text-gray-500 hover:text-black transition'>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 p-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button key={action.label}>
              <Icon className="text-gray-700 hover:text-black transition" />
            </button>
          );
        })}
      </div>
  
    </nav>
  );
}

export default Navbar;