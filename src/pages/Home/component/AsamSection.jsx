import React from 'react';
import asam from '../../../images/product/asam.webp';
import icon from '../../../images/icon/check.png';

export default function AsamSection() {
  return (
    <>
       <div className="pl-5 pr-5 z-10">
                <div className="flex flex-col-reverse  sm:flex-row bg-gray-100 p-10 rounded-lg shadow-lg">
                  {/* Text Section */}
                  <div className="flex-1 sm:pr-6 mb-6 sm:mb-0  p-1 ">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                    Unlock the power of Autonomous Single App Mode (ASAM)
                    </h1>
                    <div className=''>
                    <div className="space-y-4 text-gray-700   ">
                      <p className="flex items-center text-lg">
                        <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                        A feature that empowers your iOS app to seamlessly secure itself in the foreground.
                      </p>
                      <p className="flex items-center text-lg">
                        <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                        Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.
                      </p>
                      <p className="flex items-center text-lg">
                        <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                        Create focused, efficient and secure digital environments to match your requirements.
                      </p>
                      <p className="flex items-center text-lg">
                        <img src={icon} alt="icon" className="max-w-7 h-5 mr-2" />
                        Configure ASAM effortlessly and elevate your user experience like never before.
                      </p>
                    </div>
                    </div>
                  </div>
        
                  {/* Image Section */}
                  <div className="flex-1 flex justify-center sm:justify-start  p-1">
                    <img
                      src={asam}
                      alt="Single App Kiosk"
                      className=" rounded-lg "
                    />
                  </div>
                </div>
              </div>
    </>
  )
}
