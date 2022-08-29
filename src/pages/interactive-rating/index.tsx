import Image from 'next/image';
import React, { useState } from 'react';
import { RiStarFill } from 'react-icons/ri';

const Rating: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState<
    number | null | undefined
  >();

  const handleSubmit = (value: number | null | undefined) => {
    setSelectedRating(value);
    setIsSubmitted(true);
  };

  return (
    <div className='bg-black'>
      <div className='flex h-screen items-center justify-center'>
        {isSubmitted ? (
          <ThankyouState rating={selectedRating} />
        ) : (
          <InteractiveRating handleRate={handleSubmit} />
        )}
      </div>
    </div>
  );
};

const InteractiveRating = ({
  handleRate,
}: {
  handleRate: (value: number | null | undefined) => void;
}) => {
  const [rating, setRating] = useState<number | null>();

  return (
    <div className='mx-4 flex max-w-sm flex-col gap-4 rounded-xl bg-gradient-to-t from-gray-900 to-gray-800 p-8 text-white'>
      <span className='w-fit rounded-full bg-gray-700 p-2'>
        <RiStarFill className=' text-orange-500' />
      </span>
      <div className=''>
        <span className='text-2xl'>How did we do?</span>
        <p className='text-gray-500'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className='flex items-center gap-4'>
        {Array.from([1, 2, 3, 4, 5]).map((rate) => (
          <span
            onClick={() => setRating(rate)}
            key={`rate-key-val-${rate}`}
            className={`flex-1 cursor-pointer rounded-[50%] py-3 text-center lg:py-3 ${
              rate == rating
                ? 'bg-orange-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-400 hover:text-white'
            }`}
          >
            {rate}
          </span>
        ))}
      </div>
      <input
        type='button'
        onClick={() => handleRate(rating)}
        value='SUBMIT'
        className='cursor-pointer rounded-full bg-orange-500 p-3 hover:bg-white hover:text-orange-500'
      />
    </div>
  );
};

const ThankyouState = ({ rating }: { rating: number | null | undefined }) => (
  <div className='mx-4 flex max-w-sm flex-col items-center gap-4 rounded-xl bg-gradient-to-t from-gray-900 to-gray-800 p-8 text-white'>
    <Image
      alt='thank you illustration'
      width={150}
      height={100}
      src='/svg/illustration-thank-you.svg'
    />
    <span className='rounded-full bg-gray-800 px-4 py-1 text-sm text-orange-500'>
      {`You selected ${rating} out of 5`}
    </span>
    <div className='text-center'>
      <span className='text-2xl'>Thank you!</span>
      <p className='text-sm text-gray-500'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&#39;t hesitate to get in touch!
      </p>
    </div>
  </div>
);

export default Rating;
