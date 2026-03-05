import { motion } from "framer-motion";
import works1 from '../../assets/icons/works1.png';
import works2 from '../../assets/icons/works2.png';
import works3 from '../../assets/icons/works3.png';
import works4 from '../../assets/icons/works4.png';

const HowWorks = () => {

  const boxVariants = {
    left: { 
      hidden: { x: -200, opacity: 0 }, 
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } } 
    },
    right: { 
      hidden: { x: 200, opacity: 0 }, 
      visible: { x: 0, opacity: 1, transition: { duration: 0.8 } } 
    },
    top: {
      hidden: { y: -200, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
    },
    bottom: {
      hidden: { y: 200, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
    }
  }

  return (
    <section>
      <div>
        <h1 className='text-4xl text-center'>How it Works</h1>
      </div>
      <div className='mx-5 flex flex-col items-center'>
        {/* Box 1 - from Left */}
        <motion.div 
          className="box sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row items-center shadow-lg shadow-cyan-500/50 border-double border-4 border-sky-500" 
          style={{ height: '350px' }}
          variants={boxVariants.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img className="" src={works1} alt="" style={{ width: '100%', height: '80%' }} />
          <div className="brief">
            <h1 className='text-center'>FIND YOUR VISA OPTION</h1>
            <h3 className='text-center'>Explore work permit or student visa options easily. We guide you step by step to choose the right visa for you.</h3>
          </div>
        </motion.div>

        {/* Box 2 - from Right */}
        <motion.div
          className="box sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row items-center border-dashed shadow-lg shadow-cyan-500/50 pt-6 border-2 border-sky-500 mt-10"
          variants={boxVariants.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="brief">
            <h1 className='text-center'>BOOK CONSULTATION</h1>
            <h3 className='text-center'>Schedule a consultation with our visa experts in just a few clicks. We will handle all the paperwork for you.</h3>
          </div>
          <img className="w-64" src={works2} alt="" />
        </motion.div>

        {/* Box 3 - from Left */}
        <motion.div
          className="box sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row items-center rounded-[18px] shadow-lg shadow-cyan-500/50 border-double border-4 border-sky-500 mt-10"
          variants={boxVariants.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img className="w-64" src={works3} alt="" />
          <div className="brief">
            <h1 className='text-center'>VISA APPLICATION</h1>
            <h3 className='text-center'>Submit your work permit or student visa application with our support. We ensure everything is complete and correct.</h3>
          </div>
        </motion.div>

        {/* Box 4 - from Right */}
        <motion.div
          className="box sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row items-center rounded-[12px] shadow-lg shadow-cyan-500/50 border-dashed border-2 border-sky-500 mt-10 mb-10"
          variants={boxVariants.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="brief">
            <h1 className="text-center">GET YOUR VISA</h1>
            <h3 className='text-center'>Receive your visa and start your journey confidently. We are here to ensure a smooth process from start to finish.</h3>
          </div>
          <img className="h-80 sm:w-68" src={works4} alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default HowWorks;
