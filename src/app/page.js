import About from '@/components/About';
import Banner from '@/components/Banner';
import React from 'react';

const page = () => {
  return (
    <div>
      {/* This is Navbar */}
      <Banner/>
      <About/>
    </div>
  );
};

export default page;