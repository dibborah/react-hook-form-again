import { SubmitHandler, useForm } from "react-hook-form"

type FormFields = {
  email: string,
  password: string
}
const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', {
            required: 'Email must include @',
            validate: (value) => value.includes('@')
          })}
          type="text"
          placeholder="Email"
        />
        {errors.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
      </div>
      <div>
        <input
          {...register('password', {
            required: 'Password length should be > 8',
            minLength: 8,
          })}
          type="password"
          placeholder="Password"
          />
          {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App