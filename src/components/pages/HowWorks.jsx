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
          <img className="" src={works1} alt="Choose your IGT Gas Safety Device" style={{ width: '100%', height: '80%' }} />
          <div className="brief">
            <h1 className='text-center'>CHOOSE YOUR IGT DEVICE</h1>
            <h3 className='text-center'>Browse our range of IGT Gas Safety Devices. We help you select the right model based on your cylinder type and kitchen setup.</h3>
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
            <h1 className='text-center'>PLACE YOUR ORDER</h1>
            <h3 className='text-center'>Order your IGT Gas Safety Device online or visit our showroom. We offer easy ordering with fast delivery across Bangladesh.</h3>
          </div>
          <img className="w-64" src={works2} alt="Place your order for IGT device" />
        </motion.div>

        {/* Box 3 - from Left */}
        <motion.div
          className="box sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row items-center rounded-[18px] shadow-lg shadow-cyan-500/50 border-double border-4 border-sky-500 mt-10"
          variants={boxVariants.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img className="w-64" src={works3} alt="Easy installation of IGT device" />
          <div className="brief">
            <h1 className='text-center'>EASY INSTALLATION</h1>
            <h3 className='text-center'>Install the device on your LPG cylinder in minutes. No tools required - just attach it between the regulator and the cylinder.</h3>
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
            <h1 className="text-center">COOK WITH CONFIDENCE</h1>
            <h3 className='text-center'>Enjoy safe, worry-free cooking every day. The IGT device monitors your gas 24/7 and automatically shuts off if a leak is detected.</h3>
          </div>
          <img className="h-80 sm:w-68" src={works4} alt="Safe cooking with IGT Gas Safety Device" />
        </motion.div>
      </div>
    </section>
  );
}

export default HowWorks;
