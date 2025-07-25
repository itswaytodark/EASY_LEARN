import Background from "../components/ui/background"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"  // Import axios
import { useDispatch } from "react-redux"
import { onLogin } from "@/REDUX/slices/isAuth"

const Login_page = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" })
  const [isNewUser, setIsNewUser] = useState(false)

  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BASE_URL


  const LOGIN_URL = `${baseUrl}/api/auth/login`
  const REGISTER_URL = `${baseUrl}/api/auth/register`

  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(LOGIN_URL, loginData, {withCredentials: true} )

      toast.success(res.data.message || "Login successful!")
      dispatch(onLogin())

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message)
      } else {
        toast.error("An unexpected error occurred during login.")
      }
      console.error(err)
    }

    setLoading(false)
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(REGISTER_URL, signupData,{withCredentials: true})

      toast.success(res.data.message || "Account created! Please log in.")
      setSignupData({ name: "", email: "", password: "" })

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message)
      } else {
        toast.error("An unexpected error occurred during signup.")
      }
      console.error(err)
    }

    setLoading(false)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <div className="flex h-screen items-center justify-center w-full px-4 py-16 ">
        <div className="max-w-md w-full text-white">
          {!isNewUser ? (
            <Card className="bg-white/5 border border-white/20 p-2">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-1 text-center">Howdy!</h2>
                <p className="text-center text-sm font-light text-gray-100 mb-5">
                  LOGIN TO YOUR ACCOUNT HERE
                </p>
                <form onSubmit={handleLogin} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="bg-white/10"
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="bg-white/10"
                    required
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </form>
                <p className="text-sm text-center mt-2">
                  New user?{" "}
                  <button
                    type="button"
                    onClick={() => setIsNewUser(true)}
                    className="text-blue-400 underline cursor-pointer"
                  >
                    Sign Up
                  </button>
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/5 border border-white/20 p-2">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-1 text-center">Create New Account</h2>
                <p className="text-center text-sm font-light text-gray-100 mb-5">
                  Sign-up Your Account
                </p>
                <form onSubmit={handleSignup} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData({ ...signupData, name: e.target.value })
                    }
                    className="bg-white/10"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                    className="bg-white/10"
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                    className="bg-white/10"
                    required
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>
                <p className="text-sm text-center mt-2">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsNewUser(false)}
                    className="text-blue-400 underline cursor-pointer"
                  >
                    Login
                  </button>
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login_page
