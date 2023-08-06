import React from 'react';
//images
import Image from '../assets/topImg.jpg';
//icons
import {FaLinkedin,FaLaptopCode,FaGithub, FaYoutube, FaDribbble,FaGoodreadsG} from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../variants';

import { Link } from 'react-scroll';

const Banner = () => {
  return (<section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-8 lg:flex-row items-center lg:gap-x-12'>
            <div className='flex-1 text-center font-secondary lg:text-left'>
              <motion.h1 
              variants={fadeIn('up',0.3)}
              initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}
               className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              RAJDEEP <span>DAS</span>
              </motion.h1>
              <motion.div variants={fadeIn('up',0.4)}
              initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} 
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='text-white mr-4'>I am a</span>
                <TypeAnimation sequence={['Student',2000, 'Coder', 2000, 'Developer',2000]} speed={50} className='text-yellow-400' wrapper='span' repeat={Infinity}/>
              </motion.div>
              <motion.p variants={fadeIn('up',0.5)}
              initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}
               className='mb-8 max-w-lg mx-auto lg:mx-0'> 
                3rd Year Student at NIT Rourkela pursuing BTech in Computer Science. Exploring the World of Development and solving DSA Problems for the past 2 Years.
                </motion.p>
                <motion.div variants={fadeIn('up',0.6)}
              initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}
               className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                  <Link to="contact"
                    smooth={true} 
                  ><button className='bg-amber-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'>Contact me</button></Link>
                  <Link to='home' activeClass='active'
                    smooth={true}  
                  ><p className='text-yellow-400 cursor-pointer'>My Portfolio</p></Link>
                </motion.div>
                <motion.div variants={fadeIn('up',0.7)}
              initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}
               className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                <a href='https://www.linkedin.com/in/imraj071' target='_blank'>
                  <FaLinkedin/>
                </a>
                <a href='https://github.com/imraj071' target='_blank'>
                  <FaGithub/>
                </a>
                <a href='https://leetcode.com/imraj071/' target='_blank'>
                  <FaLaptopCode/>
                </a>
                <a href='https://auth.geeksforgeeks.org/user/imrajr0n9' target='_blank'>
                <FaGoodreadsG/>
                </a>
              </motion.div>
            </div>
              
            <motion.div variants={fadeIn('down',0.5)}
              initial="hidden" whileInView={'show'} 
              className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                <img src={Image} className='rounded-full' alt=''/>
            </motion.div>
          </div>
        </div>
  </section>);
};

export default Banner;
