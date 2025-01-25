import React from 'react';
import '../Home/Home.css';
import Banner from './Banner';
import SubBanner from './SubBanner';
import MainSection from './MainSection';
import Main from './Main';
import Testimonial from './Testimonial ';
import PlatForms from './PlatForms';
import SignUp from './SignUp';

export default function index() {

  return (
    <>
    <div className=''>
      <div className="home-container pt-0 px-4 md:px-2 lg:px-16">
        <Banner />
        {/* Additional sections can be added here */}
      </div>
      <div className="bg-slate-900 ">
        <SubBanner />
      </div>
      <div className=''>
        <MainSection />
      </div>
      <div className='bg-slate-50  '>
        <Main/>
      </div>
      <div className=' bg-gray-100 '>
        <Testimonial />
      </div>
      <div className='bg-slate-50 px-10 '>
        <PlatForms/>
      </div>
       <div className='bg-slate-950 px-14'>
        <SignUp/>
       </div>
      </div>
    </>
  );
}
