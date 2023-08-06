import React from 'react';
import {Link} from 'react-scroll'

const Header = () => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <Link to='home' smooth={true} >
        <p className='text-yellow-400 text-2xl font-extrabold cursor-pointer'>RAJDEEP DAS</p>   
        </Link>
        <Link to='contact' activeClass='active'
        smooth={true}
        spy={true} 
        >
        <button className='bg-amber-400  hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full'> Work with me</button>
        </Link>
      </div>
    </div>
  </header>;
};

export default Header;
