import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const challenges = [
  {
    id: 'intro-signup-form',
    title: 'Intro component with sign-up form',
    images: 'intro-signup-form.jpg',
    route: '/intro-signup-form',
  },
  {
    id: 'interactive-rating',
    title: 'Interactive rating component',
    images: 'interactive-rating.jpg',
    route: '/interactive-rating',
  },
];
export default function HomePage() {
  return (
    <div className='min-h-full min-w-full bg-slate-800 text-slate-100'>
      <div className='h-screen w-screen'>
        <h1 className='text-center'>Challenges Submissions</h1>
        <div className='grid grid-cols-5 gap-4 p-8'>
          {challenges.map((challenge) => (
            <Link
              key={`challenge-key-${challenge.id}`}
              href={challenge.route}
              target='_blank'
            >
              <div className='flex cursor-pointer flex-col rounded bg-slate-100 p-4 text-slate-900'>
                <Image
                  alt='Image Challenge Submission'
                  src={'/images/' + challenge.images}
                  width={400}
                  height={200}
                  objectFit='cover'
                />
                <span className='text-center'>{challenge.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
