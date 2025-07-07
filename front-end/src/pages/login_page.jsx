import Background from "../components/ui/background"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useState } from "react"

const Login_page = () => {

  const [loginData, setLoginData] = useState({ name:"", email: "", password: "" })
  const [signupData, setSignupData] = useState({name:"", email: "", password: "" })


  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", loginData);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up:", signupData);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Background />

      
      <div className="absolute inset-0 pt-10 px-4 top-50">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto z-10">
          
          
          <Card className="bg-white/5 border border-white/20 text-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={loginData.name}
                  onChange={(e) =>
                    setLoginData({ ...loginData, name: e.target.value })
                  }
                  className="bg-white/10"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  className="bg-white/10"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  className="bg-white/10"
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>

         
          <Card className="bg-white/5 border border-white/20 text-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
              <form onSubmit={handleSignup} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={signupData.name}
                  onChange={(e) =>
                    setSignupData({ ...signupData, name: e.target.value })
                  }
                  className="bg-white/10"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  className="bg-white/10"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  className="bg-white/10"
                />
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default Login_page;
