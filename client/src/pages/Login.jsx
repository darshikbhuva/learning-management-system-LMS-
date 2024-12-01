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
import { useState } from "react";

const Login = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  const registrationDataSubmitHandler = (type) => {
    const inputData = type === "signup" ? signupData : loginData;
    console.log(inputData);
  };
  return (
    <div className=" w-full  flex items-center justify-center">
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
              <Button onClick={() => registrationDataSubmitHandler("signup")}>
                Signup
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
              <Button onClick={() => registrationDataSubmitHandler("login")}>
                Login
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
