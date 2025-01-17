import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log('Form Data:', data);
  };
  const nameRegister = register('name');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">이름:</label>
      <input
        id="name"
        placeholder="name"
        {...register('name', {
          required: '이름은 필수 항목입니다.',
          minLength: {
            message: '이름은 최소 한글자 이상으로 입력해주세요',
            value: 1,
          },
        })}
      />
      {errors.name?.message}

      <br />
      <label htmlFor="age">나이:</label>
      <input
        id="age"
        type="number"
        placeholder="나이"
        {...register('age', {
          required: '나이는 필수 항목입니다.',
          valueAsNumber: true,
          min: { value: 1, message: '0 이상의 숫자만 입력 가능합니다.' },
        })}
      />
      {errors.age?.message}
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
