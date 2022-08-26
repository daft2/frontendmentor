import * as React from 'react';
import { useForm } from 'react-hook-form';
import { RiErrorWarningFill } from 'react-icons/ri';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const noErrors = Object.keys(errors).length == 0;

  return (
    <div className="min-h-full min-w-full bg-isf-red bg-[url('isf/mobile.png')] lg:bg-[url('isf/desktop.png')]">
      <div className='flex h-full w-full flex-col items-center justify-around gap-8 text-white lg:flex-row lg:p-40'>
        <div className='mt-16 flex flex-col gap-8 p-6 text-center lg:mt-0 lg:w-1/2 lg:p-0 lg:text-left'>
          <span className='px-12 text-3xl font-bold lg:px-0 lg:text-5xl'>
            Learn to code by watching others
          </span>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className='mb-4 flex flex-col gap-4 px-6 lg:w-1/2'>
          <button className='rounded-lg bg-isf-blue p-4 px-16 text-center shadow-isfDark lg:px-0'>
            <b>Try it free 7 days</b> then $20/mo thereafter
          </button>
          <form
            action='#'
            // eslint-disable-next-line no-console
            onSubmit={handleSubmit(() => console.log('submit'))}
            className='flex flex-col gap-4 rounded-lg bg-white p-8 shadow-isfDark'
          >
            <InputField
              type='text'
              className={`${
                errors.firstName ? 'border-isf-red' : 'border-isf-grayBlue'
              } w-full rounded py-3 pl-8 pr-12 font-bold text-isf-darkBlue caret-isf-blue focus:ring-isf-blue`}
              placeholder='First Name'
              error={errors.firstName}
              {...register('firstName', { required: true })}
            />
            <InputField
              type='text'
              className={`${
                errors.lastName ? 'border-isf-red' : 'border-isf-grayBlue'
              } w-full rounded px-8 py-3 font-bold text-isf-darkBlue caret-isf-blue focus:ring-isf-blue`}
              placeholder='Last Name'
              error={errors.lastName}
              {...register('lastName', { required: true })}
            />
            <InputField
              type='email'
              className={`${
                errors.email ? 'border-isf-red' : 'border-isf-grayBlue'
              } w-full rounded px-8 py-3 font-bold text-isf-darkBlue caret-isf-blue focus:ring-isf-blue`}
              placeholder='Email Address'
              error={errors.email}
              {...register('email', { required: true })}
            />
            <InputField
              type='password'
              className={`${
                errors.password ? 'border-isf-red' : 'border-isf-grayBlue'
              } w-full rounded px-8 py-3 font-bold text-isf-darkBlue caret-isf-blue focus:ring-isf-blue`}
              placeholder='Password'
              error={errors.password}
              {...register('password', { required: true })}
            />
            <input
              type='submit'
              value='CLAIM YOUR FREE TRIAL'
              className='rounded-lg bg-isf-green p-4 text-center shadow-isfDarkGreen disabled:opacity-50'
              disabled={!noErrors}
            />
            <span className='text-center text-xs text-isf-grayBlue'>
              By clicking the button you are agreeing to our{' '}
              <span className='font-bold text-isf-red'>Terms and Services</span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute;
  className: string;
  placeholder: string;
  error: Record<string, unknown> | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  className,
  placeholder,
  error,
  ...rest
}) => (
  <div className='flex flex-col'>
    <label className='relative block'>
      <span className='sr-only'>Search</span>
      <span className='absolute inset-y-0 right-5 flex items-center pl-2'>
        {error && <RiErrorWarningFill className='h-6 w-6 text-red-500' />}
      </span>
      <input
        type={type}
        {...rest}
        className={className}
        placeholder={placeholder}
      />
    </label>

    {error && (
      <span className='text-right text-xs capitalize italic text-isf-red'>
        {`${rest.name} cannot be empty`}
      </span>
    )}
  </div>
);

export default Page;
