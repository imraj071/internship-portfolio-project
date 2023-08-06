import React from 'react';
//count up
import CountUp from 'react-countup';
//intersection observer hook
import {useInView} from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

import { Link } from 'react-scroll';


const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  })
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div
         variants={fadeIn('right',0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] rounded-lg bg-top'></motion.div>
        <motion.div
        variants={fadeIn('left',0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
        className='flex-1 '>
            <h2 className='h2 text-amber-300'>About me</h2>
            <h3 className='h3 mb-4 text-yellow-400'>Name : Rajdeep Das</h3>
            <h3 className='h3 mb-4'>I'm a 3rd year Student at NIT Rourkela pursuing BTech in Computer Science branch.</h3>
            <p className='mb-6'>I am a Front End Developer and have completed 10+ Projects using HTML, CSS, JS, Tailwind CSS and React. Also, I have completed a course on Data Structures and Algorithms and solved 180+ Questions on Leetcode and 100+ Questions on GeeksforGeeks.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-amber-300 mb-2 '>
                  { inView ? <CountUp start={0} end={2} duration={8}/> : null} +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Coding
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-amber-300 mb-2 '>
                  { inView ? <CountUp start={0} end={10} duration={3}/> : null} +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects  <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-amber-300 mb-2 '>
                  { inView ? <CountUp start={0} end={180} duration={3}/> : null} +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Qs Solved <br/>
                  on Leetcode
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-amber-300 mb-2 '>
                  { inView ? <CountUp start={0} end={100} duration={3}/> : null} +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Qs Solved <br/>
                  on GfG
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='bg-amber-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'><Link to='contact' smooth={true}>Contact me</Link></button>
              
              <button>
                <Link to='home' smooth={true}><p className='text-yellow-300'>My Portfolio</p></Link>
              </button>
            </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
