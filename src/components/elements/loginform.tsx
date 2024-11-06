import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useStore } from '@nanostores/react';
import { user } from '@/stores';
import MoneyBag from 'public/assets/moneyBag.svg';

const Login: React.FC = () => {
  const userData = useStore(user);

  // State to store input values
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission and change page to home
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    user.set({
      usernameOrEmail,
      password,
    });
    window.location.href = '/homes';
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center space-y-6">
        <img src={MoneyBag.src} alt="Logo" className="w-[120px] h-[120px]" />

        <h1 className="text-2xl font-notosansthai text-[#c34e5e]">Welcome to TaxService</h1>

        <form className="space-y-4 w-full max-w-xs" onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="Email or Username"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] 
            focus:outline-none focus:border-pink-400"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#c34e5e] rounded-md placeholder:text-[#e4b0b9] focus:outline-none focus:border-pink-400"
            />
          </div>
          <div>
            <Button
              type="submit"
              className="w-full py-2 text-white bg-[#c34e5e] rounded-md hover:bg-pink-700 focus:outline-none">
              Log in
            </Button>
          </div>
          <div className="text-right text-sm text-pink-500">
            <a href="/forgot-password" className="hover:underline font-notosansthai">
              Forgotten password?
            </a>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-pink-200" />
            <span className="mx-2 text-sm text-pink-500">or</span>
            <div className="flex-grow border-t border-pink-200" />
          </div>
          <div>
            <Button
              type="button"
              className="w-full py-2 text-white bg-[#e4b0b9] rounded-md hover:bg-pink-300 focus:outline-none">
              Create new account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
