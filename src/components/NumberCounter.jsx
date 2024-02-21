import React from 'react';
import './numbercounter.css';

export default function NumberCounter() {
  return (
    <section className='ncsection'>
      <div className="ncrow">
        <div className="nccolumn1">
            <h3 className='nccolumnheading text-4xl'>Deliciously near you</h3>
            <h1 className='text-6xl font-bold'>Our Footprints</h1>
            <p className='nccolumnpara'>Tempor incididunt ut labore. Et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        
        <div className="nccolumn2">
            <div className="nccolumninner">
                <div className="nccolumninner1 text-center">23+ <br /> Cities</div>
                <div className="nccolumninner1 text-center">3 <br />Countries</div>
                <div className="nccolumninner1 text-center">250+ <br />Outlates</div>
            </div>

        <div className='mt-6'>
            <p className='text-2xl'>“Life shrinks or expands in proportion to one’s courage.”</p>
            <p className='text-2xl font-bold'>- Iskconpuri</p>
        </div>
        </div>

      </div>
    </section>
  )
}
