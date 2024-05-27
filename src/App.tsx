import { SubmitHandler, useForm } from "react-hook-form"

type FormFields = {
  email: string,
  password: string
};

const App = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = async(data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));// Here just awaiting an empty promise for testing purpose
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            validate: (value) => {
              if(!value.includes('@')){
                return 'Email must include @'
              }
              return true;
            }
          })}
          type="text"
          placeholder="Email"
        />
        {errors.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
      </div>
      <div>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password length must be > 8'
            },
          })}
          type="password"
          placeholder="Password"
          />
          {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
      </div>
      <button type="submit">{isSubmitting ? 'Loading...' : 'Submit'}</button>
    </form>
  )
}

export default App