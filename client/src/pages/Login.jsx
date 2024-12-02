import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi.js";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [
    registerUser,
    {
      data: registerUserData,
      error: registerUserError,
      isLoading: registerUserIsLoading,
      isSuccess: registerUserIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginUserData,
      error: loginUserError,
      isLoading: loginUserIsLoading,
      isSuccess: loginUserIsSuccess,
    },
  ] = useLoginUserMutation();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const registrationDataHandler = (e, type) => {
    const { value, name } = e.target;
    if (type === "signup") {
      setSignupData({ ...signupData, [name]: value });
    } else {
      setLoginData({ ...loginData, [name]: value });
    }
  };

  const registrationDataSubmitHandler = async (type) => {
    const inputData = type === "signup" ? signupData : loginData;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerUserData && registerUserIsSuccess) {
      toast.success(registerUserData.message || "Signup successfully.");
    }
    if (registerUserError) {
      toast.error(registerUserError.data.message || "Signup failed.");
    }
    if (loginUserData && loginUserIsSuccess) {
      toast.success(loginUserData.message || "Login successfully.");
    }
    if (loginUserError) {
      toast.error(loginUserError.data.message || "Login failed.");
    }
  }, [
    loginUserIsLoading,
    registerUserIsLoading,
    loginUserError,
    registerUserError,
    loginUserData,
    registerUserData,
  ]);
  return (
    <div className=" w-full h-screen  flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and dick signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  placeHolder="Eg. Darshik"
                  onChange={(e) => registrationDataHandler(e, "signup")}
                  value={signupData.name}
                  name="name"
                  require="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input
                  type="email"
                  placeHolder="Eg. Darshik@gmail.com"
                  onChange={(e) => registrationDataHandler(e, "signup")}
                  value={signupData.email}
                  name="email"
                  require="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Password</Label>
                <Input
                  type="password"
                  placeHolder="Eg. xyz"
                  value={signupData.password}
                  onChange={(e) => registrationDataHandler(e, "signup")}
                  name="password"
                  require="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={registerUserIsLoading}
                onClick={() => registrationDataSubmitHandler("signup")}
              >
                {registerUserIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input
                  type="email"
                  placeHolder="Eg. Darshik@gmail.com"
                  value={loginData.email}
                  onChange={(e) => registrationDataHandler(e, "login")}
                  name="email"
                  require="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Password</Label>
                <Input
                  type="password"
                  placeHolder="Eg. xyz"
                  onChange={(e) => registrationDataHandler(e, "login")}
                  value={loginData.password}
                  name="password"
                  require="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginUserIsLoading}
                onClick={() => registrationDataSubmitHandler("login")}
              >
                {loginUserIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
