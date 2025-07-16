"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema, LoginSchema } from "@/lib/schema/loginSchema";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./graphql/queries";

export default function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [handleLogin] = useMutation(LOGIN);

  const onSubmit = (data: LoginSchema) => {
    handleLogin({ variables: { email: data.email, password: data.password } });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="w-full flex justify-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5YqEx9HNz_fI66zDqfdWRQUvvHqYVMX1JA&s"
            alt="logo"
            height={80}
            width={80}
            className="rounded-3xl"
          />
        </div>
        <CardTitle>Welcome to Unique Shop</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your email" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your password" />
                    </FormControl>
                    <FormDescription>
                      Please provide secure password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
