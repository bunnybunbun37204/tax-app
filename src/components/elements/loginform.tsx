import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="w-full max-w-xs p-8">
        <form className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Email or Username"
              className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] focus:outline-none focus:border-pink-400"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] focus:outline-none focus:border-pink-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#c34e5e] rounded-md hover:bg-pink-700 focus:outline-none"
            >
              Log in
            </button>
          </div>
          <div className="flex justify-between text-sm text-pink-500">
            <a href="/forgot-password" className="hover:underline">
              Forgotten password?
            </a>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-pink-200" />
            <span className="mx-2 text-sm text-pink-500">or</span>
            <div className="flex-grow border-t border-pink-200" />
          </div>
          <div>
            <button
              type="button"
              className="w-full py-2 text-pink-600 bg-[#e4b0b9] rounded-md hover:bg-pink-300 focus:outline-none"
            >
              Create new account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;