import Background from "../components/ui/background"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"

const ForgetPassword = () => {

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BASE_URL;


  const handleSubmit = async (e) => {

    e.preventDefault()
    setLoading(true)
    
    try {

      const res = await axios.post(`${baseUrl}/api/auth/reset-email`, { email })
      toast.success(res.data.message || 'Reset link sent to your email!')

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        error.message ||
        'Something went wrong. Please try again.'
      )
    } 
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <div className="flex h-screen items-center justify-center w-full px-4 py-16">
        <div className="max-w-md w-full text-white">
          <Card className="bg-white/5 border border-white/20 p-5">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-1 text-center">Forgot Password</h2>
              <p className="text-center text-sm font-light text-gray-100 mb-5">
                Enter your email to receive a password reset link
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10"
                  required
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
