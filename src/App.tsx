import { useState } from "react"

const App = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errors, setError] = useState<{ email: string, password: string }>({
    email: '',
    password: ''
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError({
      email: '',
      password: ''
    })
    if (!email.includes('@')) {
      return setError((prevErrors) => {
        return {
          ...prevErrors,
          email: 'Email should include @',
        };
      });
    }
    if (password.length < 8) {
      return setError((prevErrors) => {
        return {
          ...prevErrors,
          password: 'The length of password should be greater than 8',
        }
      })
    }
    console.log('Form Submitted!!!');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          {errors?.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          {errors?.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App