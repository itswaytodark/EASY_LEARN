import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
const Login_btn = () => {
    return (
        <div className="hidden md:flex ml-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              Login
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
            </DialogHeader>

            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 rounded-md"
            />
            <Button variant="secondary" className="w-full">
              Sign in
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    )
}

export default Login_btn