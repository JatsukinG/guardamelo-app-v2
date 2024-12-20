import { useState } from 'react'


const LoginForm = () => {
  const [username, setUsername] = useState('')

  const handleLogin = () => {
    if (username.trim()) {
      console.log(username)
    } else {
    }
  }

  return (
      <div className="relative  flex flex-col gap-1.5 border-4  shadow-2xl shadow-purple-400 border-purple-100 p-4 rounded-[20px]">
        <h1 className="text-2xl font-bold mb-4 text-center">Ingresar</h1>
        <div className="relative">
          <label className="ml-1 text-black uppercase text-sm font-bold">Username</label>
          <input
              autoFocus
              type="text"
              name="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-none outline-none w-full p-2 pl-3 rounded-[20px] bg-white transition duration-300 focus:bg-black focus:text-white hover:bg-black hover:text-white"
          />
          <button
              onClick={handleLogin}
              className="w-full py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
          >
            Log In
          </button>
        </div>
      </div>
  )
}

export default LoginForm