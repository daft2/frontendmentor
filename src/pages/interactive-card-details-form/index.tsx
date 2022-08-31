import React from 'react';
import { useForm } from 'react-hook-form';

function cc_format(value: string) {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  } else {
    return value;
  }
}

const Card = () => {
  const {
    register,
    // handleSubmit,
    // formState: { errors },
  } = useForm();

  const [card, setCard] = React.useState({
    number: '',
    holder: '',
    month: '',
    year: '',
    cvc: '',
  });

  // const onSubmit = (data: any) => console.log(card);

  return (
    <div className='flex h-screen'>
      <div className="w-1/2 bg-[url('icdf/desktop.png')]">hello</div>
      <div className='flex w-full items-center justify-center'>
        <form className='flex max-w-lg flex-col gap-6'>
          <InputField
            label='CARDHOLDER NAME'
            type='text'
            placeholder='e.g. Jane Appleseed'
            {...register('cardHolder', {
              required: true,
              onChange: (e) =>
                setCard((prev) => ({
                  ...prev,
                  holder: e.target.value,
                })),
            })}
          />
          <InputField
            label='CARD NUMBER'
            type='text'
            placeholder='e.g. 4123 4567 4890'
            value={card.number}
            {...register('cardNumber', {
              required: true,
              onChange: (e) =>
                setCard((prev) => ({
                  ...prev,
                  number: cc_format(e.target.value),
                })),
              maxLength: 19,
              setValueAs: (value) => value.replaceAll(/\s/g, ''),
            })}
          />
          <div className='flex items-center gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='' className='font-serif text-xs font-semibold'>
                EXP. DATE (MM/YY)
              </label>
              <div className='flex gap-2'>
                <input
                  className='w-20 rounded-lg border-gray-300 focus:ring-1 focus:ring-purple-500'
                  type='text'
                  placeholder='MM'
                  min={2}
                  maxLength={2}
                  {...register('cardMM', {
                    required: true,
                    onChange: (e) =>
                      setCard((prev) => ({
                        ...prev,
                        month: e.target.value,
                      })),
                  })}
                />
                <input
                  className='w-20 rounded-lg border-gray-300 focus:ring-1 focus:ring-purple-500'
                  type='text'
                  placeholder='YY'
                  min={2}
                  maxLength={2}
                  {...register('cardYY', {
                    required: true,
                    onChange: (e) =>
                      setCard((prev) => ({
                        ...prev,
                        year: e.target.value,
                      })),
                  })}
                />
              </div>
            </div>
            <div>
              <InputField
                label='CVC'
                type='text'
                className='w-52'
                placeholder='e.g. 123'
                min={3}
                maxLength={3}
                {...register('cardCVC', {
                  required: true,
                  onChange: (e) =>
                    setCard((prev) => ({
                      ...prev,
                      cvc: e.target.value,
                    })),
                })}
              />
            </div>
          </div>
          <input
            type='button'
            value='Confirm'
            className='cursor-pointer rounded bg-slate-900 p-2 text-white'
          />
        </form>
      </div>
    </div>
  );
};

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string | undefined;
  // error: Record<string, unknown> | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  className,
  ...rest
}) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <label htmlFor='' className='font-serif text-xs font-semibold'>
      {label}
    </label>
    <input
      className='rounded-lg border-gray-300 focus:ring-1 focus:ring-purple-500'
      {...rest}
    />
  </div>
);

export default Card;
