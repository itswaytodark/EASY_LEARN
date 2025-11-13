import Background from "../components/ui/background"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { useDispatch } from "react-redux"
import { onLogin } from "@/REDUX/slices/isAuth"
import { Link, useNavigate } from "react-router-dom";


const Login_page = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" })
  const [isNewUser, setIsNewUser] = useState(false)

  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BASE_URL


  const LOGIN_URL = `${baseUrl}/api/auth/login`
  const REGISTER_URL = `${baseUrl}/api/auth/register`

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(LOGIN_URL, loginData, { withCredentials: true })

      toast.success(res.data.message || "Login successful!")

      dispatch(onLogin(res.data.user))

      localStorage.setItem('authUser', JSON.stringify(res.data.user));
      localStorage.setItem('isAuth', 'true');

      navigate('/')

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
      const res = await axios.post(REGISTER_URL, signupData, { withCredentials: true })

      toast.success(res.data.message || "Account created! Please log in.")
      setIsNewUser(false)
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
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">

      {/* FIX: Background Component called directly (fixed structure) */}
      <Background />

      <div className="flex h-screen items-center justify-center w-full px-4 py-16">
        {/* Card wrapper */}
        <div className="max-w-md w-full relative z-10">

          {/* --- Conditional Rendering Block Start --- */}
          {!isNewUser ? (
            <Card className="bg-white/5 border border-border shadow-2xl p-4 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-3xl font-bold mb-1 text-center text-primary">Welcome Back!</h2>
                <p className="text-center text-sm font-medium text-muted-foreground mb-6">
                  Log in to your account.
                </p>
                <form onSubmit={handleLogin} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />

                  <p>
                    <Link to="/forgot-password"
                      // RESTORED ORIGINAL COLOR
                      className="text-sm text-blue-400 hover:text-blue-500 hover:underline transition-colors"
                    >
                      Forgot Password?
                    </Link>
                  </p>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </form>
                <p className="text-sm text-center mt-4 text-secondary-foreground">
                  New user?{" "}
                  <button
                    type="button"
                    onClick={() => setIsNewUser(true)}
                    // RESTORED ORIGINAL COLOR
                    className=" text-blue-400 hover:text-blue-500 font-medium cursor-pointer transition-colors"
                  >
                    Sign Up
                  </button>
                </p>
              </CardContent>
            </Card>
          ) : (
            /* --- Signup Card --- */
            <Card className="bg-card/90 border border-border shadow-2xl p-4 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-3xl font-bold mb-1 text-center text-primary">Create Account</h2>
                <p className="text-center text-sm font-medium text-muted-foreground mb-6">
                  Sign up to get started.
                </p>
                <form onSubmit={handleSignup} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData({ ...signupData, name: e.target.value })
                    }
                    className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                    className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                    className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>
                <p className="text-sm text-center mt-4 text-secondary-foreground">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsNewUser(false)}
                    // RESTORED ORIGINAL COLOR
                    className=" text-blue-400 hover:text-blue-500 underline font-medium cursor-pointer transition-colors"
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