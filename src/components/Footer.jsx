import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-info py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; {new Date().getFullYear()} - Patuka Technologies, all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
