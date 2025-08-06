import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-3 rounded mb-4 border dark:bg-gray-800" />
        <input type="password" placeholder="Password" className="w-full p-3 rounded mb-4 border dark:bg-gray-800" />
        <button onClick={() => navigate('/upload')} className="w-full bg-primary text-black py-2 rounded hover:bg-yellow-500">
          Login
        </button>
      </div>
    </div>
  );
}
