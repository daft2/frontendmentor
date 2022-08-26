import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export default function HomePage() {
  return (
    <div className='min-h-full min-w-full bg-slate-800 text-slate-100'>
      <div className='h-screen w-screen'>
        <h1 className='text-center'>Challenges Submissions</h1>
        <div className='grid grid-cols-5 gap-4 p-8'>
          <Link href='/intro-signup-form' target='_blank'>
            <div className='flex cursor-pointer flex-col rounded bg-slate-100 p-4 text-slate-900'>
              <Image
                alt='Image Challenge Submission'
                src='/images/intro-signup-form.jpg'
                width={400}
                height={200}
                objectFit='cover'
              />
              <span className='text-center'>
                Intro component with sign-up form
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
