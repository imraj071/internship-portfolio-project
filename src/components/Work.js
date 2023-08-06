import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

import Img2 from '../assets/finalWeather.png';
import Img1 from '../assets/finalTTT.png';
import Img3 from '../assets/finalCounter.png';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
        variants={fadeIn('right',0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
         className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
          
          <div>
            <h2 className='h2 leading-tight text-amber-300'>Have a Look at My <br/>
            Projects
            </h2>
            <p className='max-w-sm mb-16'>I have made sevaral Projects such as the Weather App Project, Tic Tac Toe Project, Counter App, etc. Here is a glimse of some of these Projects. Click on the button to view all my Projects.</p>
            <a href='https://github.com/imraj071?tab=repositories' target='_blank'><button className='btn btn-sm bg-amber-400 hover:bg-yellow-600'>View all projects</button></a>
          </div>
          
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Front End WebDev</span>
            </div>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
              <span className='text-3xl text-white'>Tic-Tac-Toe</span>
            </div>
            
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left',0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
         className='flex-1 flex flex-col gap-y-10'>
          
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Front End WebDev</span>
            </div>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
              <span className='text-3xl text-white'>The Ultimate Weather App</span>
            </div>
            
          </div>
          
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Front End WebDev</span>
            </div>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
              <span className='text-3xl text-white'>The Counter App</span>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
