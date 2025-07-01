import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
] as const;

const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  surname: z.string().min(1, { message: "Surname is required." }),
  city: z.enum(cities, {
    errorMap: () => ({ message: "City is required." }),
  }),
  email: z
    .string()
    .email({ message: "Please enter valid email address." })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

type FormData = z.infer<typeof schema>;

const RegisterPage = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-white text-black mt-12">
      <div className="w-full max-w-md p-8 border border-gray-300 rounded-2xl shadow-md bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Create Account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="John"
                {...register("name")}
              />
              {errors.name && (
                <em className="text-red-600">{errors.name.message}</em>
              )}
            </div>
            <div className="w-1/2">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="surname"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Doe"
                {...register("surname")}
              />
              {errors.surname && (
                <em className="text-red-600">{errors.surname.message}</em>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="city">
              City
            </label>
            <select
              id="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
              {...register("city")}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <em className="text-red-600">{errors.city.message}</em>
            )}
          </div>

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
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="underline font-medium hover:text-black">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
