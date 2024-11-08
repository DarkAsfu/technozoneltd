// src/app/blogs/[slug]/page.js
'use client'
import { useParams } from 'next/navigation';

const Page = () => {
  const { slug } = useParams(); // useParams to access dynamic route parameters
  console.log(slug);

  return (
    <div>
      <h1>This is a single blog page for: {slug}</h1>
    </div>
  );
};

export default Page;
