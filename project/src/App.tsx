import React from 'react';
import LoginForm from './components/LoginForm';
import ProxmoxLogo from './components/ProxmoxLogo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <ProxmoxLogo />
            <h2 className="text-xl text-gray-700">Welcome Back</h2>
            <p className="text-gray-500 text-center">
              Please sign in to access your virtual environment
            </p>
          </div>
          
          <LoginForm />
          
          <p className="text-center text-sm text-gray-500 mt-6">
            © {new Date().getFullYear()} SetupBoxs Virtual Environment
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;