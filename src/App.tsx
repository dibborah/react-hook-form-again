import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

type FormFields = z.infer<typeof schema>

const App = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<FormFields>({
    defaultValues: {
      email: 'test@email.com',
    },
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));// Here just awaiting an empty promise for testing purpose
      // throw new Error();// Empty Error thrown for testing
      console.log(data);
    } catch (error) {
      setError('root', {
        message: 'Email already exist'
      })
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email')}
          type="text"
          placeholder="Email"
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
      </div>
      <div>
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
      </div>
      {errors.root && <div style={{ color: 'red' }}>{errors.root.message}</div>}
      <button type="submit">{isSubmitting ? 'Loading...' : 'Submit'}</button>
    </form>
  )
}

export default App