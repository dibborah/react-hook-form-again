import { SubmitHandler, useForm } from "react-hook-form"

type FormFields = {
  email: string,
  passord: string
}
const App = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const onSubmit:SubmitHandler<FormFields> = (data) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email')}
          type="text"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          {...register('passord')}
          type="password"
          placeholder="Password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App