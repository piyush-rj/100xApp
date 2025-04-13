"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    getProviders().then(setProviders);
  }, []);

  return (
    <div className="flex flex-col bg-black items-center justify-center min-h-screen">
      <h1 className="text-3xl text-[#cdcdcd] font-bold mb-4">Sign in to Your Account</h1>
      {providers &&
        Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            
            <button
              className="bg-blue-600 text-white px-5 py-2.5 rounded"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
}
