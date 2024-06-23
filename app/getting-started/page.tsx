import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { title } from "@/components/primitives";

export default function GettingStarted() {
  return (
    <div className="container mx-auto p-8">
      <h1 className={title({ color: "green", size: "lg" })}>Getting Started</h1>
      <p className="mt-6 mb-6 text-sm">
        Welcome to our platform! Whether you are a producer with your own
        textile business or a buyer looking for the best prices, we have got you
        covered.
      </p>

      <p className="mt-2 text-sm">
        Register as a producer to showcase your products and reach customers
        globally, or create a user account to discover and purchase high-quality
        textiles from around the world.
      </p>

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-green-400">Why Choose Us?</h2>
        <ul className="list-disc list-inside mt-4 text-sm">
          <div className="flex justify-center">
            <div className="card p-6 bg-white shadow-md rounded-md">
              <li>Wide range of high-quality textile products</li>
              <li>Competitive pricing from trusted producers</li>
              <li>Easy-to-use platform for seamless transactions</li>
              <li>Global reach with local support</li>
            </div>
          </div>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-green-400">
          How to Get Started
        </h2>
        <div className="flex flex-col md:flex-row mt-4 gap-4">
          <div className="card p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 1</h3>
            <p className="text-sm">Sign up for an account</p>
          </div>
          <div className="card p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 2</h3>
            <p className="text-sm">Verify your email address</p>
          </div>
          <div className="card p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 3</h3>
            <p className="text-sm">Complete your profile</p>
          </div>
          <div className="card p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold mb-2">Step 4</h3>
            <p className="text-sm">Start exploring our marketplace</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          className={buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
            className: "text-white",
          })}
          href={"/auth/register"}
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
}
