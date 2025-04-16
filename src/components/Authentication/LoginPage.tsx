import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please enter valid email address." })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen center justify-center bg-white text-black">
      <div className="w-full max-w-md p-8 border border-gray-300 rounded-2xl shadow-md bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
              {...register("email")}
            />
            {errors.email && (
              <em className="text-red-600">{errors.email.message}</em>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
              {...register("password")}
            />
            {errors.password && (
              <em className="text-red-600">{errors.password.message}</em>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="underline font-medium hover:text-black">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
