import React from 'react'
import works1 from '../../assets/icons/works1.png';
import works2 from '../../assets/icons/works2.png';
import works3 from '../../assets/icons/works3.png';
import works4 from '../../assets/icons/works4.png';

const HowWorks = () => {
  return (
    <section>
      <div>
        <h1 className=' text-4xl text-center'	>How it's Work </h1>
      </div>
      <div className='flex flex-col items-center '>
        <div className="box flex items-center shadow-lg shadow-cyan-500/50 border-double border-4 border-sky-500 mt-10	" style={{ height: '350px' }}>
          <img className=" " src={works1} alt="" style={{ width: '50%', height: '100%' }} />
          <div className="brief ">
            <h1 className='text-center'>SEARCH DOCTOR </h1>
            <h3 className='text-center'>Find your doctor easily with a minimum of effort. We've kept everything organised for you.</h3>
          </div>

        </div>
        <div className="box flex items-center border-dashed shadow-lg shadow-cyan-500/50 pt-20  border-2 border-sky-500 mt-10">

          <div className="brief">
            <h1 className='text-center'>BOOK APPOINTMENT</h1>
            <h3 className='text-center'>Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.</h3>
          </div>
          <img className="w-64" src={works2} alt="" />
        </div>
        <div className="box flex items-center rounded-[18px] shadow-lg shadow-cyan-500/50 border-double border-4 border-sky-500 mt-10">
          <img className="w-64 " src={works3} alt="" />
          <div className="brief">
            <h1 className='text-center'>Doctor Appointemet</h1>
            <h3 className='text-center'>Visit the doctor, take the service based on your appointment. Get back to good health and happiness.</h3>
          </div>
        </div>
        <div className="box flex items-center  rounded-[12px] shadow-lg shadow-cyan-500/50 w-50 border-double border-4 border-sky-500 mt-10 mb-10">

          <div className="brief ">
            <h1 className="text-center">GET WELL SOON</h1>
            <h3 className='text-center'>Visit the doctor, take the service based on your appointment. Get back to good health and happiness.</h3>
          </div>
          <img className=" h-80 sm:w-68		" src={works4} alt="" />
        </div>

      </div>
      <div>
      </div>
    </section>

  )
}

export default HowWorks
