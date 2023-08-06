import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const services= [
  {
    name: 'Front End Web Development',
    description : 'I have mastered HTML, CSS, JS, Tailwind CSS and React and built 10+ Projects using these tools.',
    link: 'https://drive.google.com/file/d/1jB-Hqvt0ISeJNCBaUmO87N2v8ZQtH6DG/view?usp=sharing',
  },
  {
    name: 'Data Structures and Algorithms',
    description : 'I have completed a course on Data Structures and Algorithms and solved 150+ problems on LeetCode and 100+ problems on GeeksforGeeks.',
    link: 'https://drive.google.com/file/d/1q4-LdOpkCxAtiX5nQ8tv_GE7Q9QGwNDa/view?usp=sharing',
  },
  {
    name: 'Database Management System',
    description : 'I have completed a course on Database Management System (DBMS) offered at my College in the 4th Semester.',
    link: 'https://drive.google.com/file/d/1-Z_p-8T4Lj6goqD4oIciH4ZeFC5SKBfO/view?usp=sharing',
  },
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-9'>
        {/*text*/}
        <motion.div
         variants={fadeIn('right',0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
         className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-amber-300 mb-6 ml-2'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16 ml-2'>I'm a 3rd Year Student pursuing BTech in Computer Science at NIT Rourkela.</h3>
          <a href='https://github.com/imraj071?tab=repositories' target='_blank'><button className='btn btn-sm bg-amber-400 hover:bg-yellow-600 ml-2'>See my Work</button></a>
        </motion.div>
        {/*services */}
        <motion.div
         variants={fadeIn('left',0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount:0.3}}
         className='flex-1'>
          {/*services list*/}
          <div>
            {services.map((service,index) => {
              const {name,description,link} = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex=col flex-1 items-end'>
                  <a href={link} target='_blank' className='bg-amber-400 hover:bg-yellow-600 rounded-full w-12 h-8 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight/>
                  </a>
                  <a href={link} target='_blank' className='text-gradient text-sm'>Learn More</a>
                </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
