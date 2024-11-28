import React, { useState } from 'react';
import { Lock, User, ChevronDown } from 'lucide-react';

const realms = [
  { id: 'pam', name: 'Linux PAM' },
  { id: 'pve', name: 'Proxmox VE' },
  { id: 'ldap', name: 'LDAP' }
];

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [realm, setRealm] = useState('pam');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, realm });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-orange-500" />
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
            placeholder="Username"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-orange-500" />
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
            placeholder="Password"
            required
          />
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative w-full bg-white border border-gray-300 rounded-lg py-2.5 pl-3 pr-10 text-left focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <span className="block truncate">
              {realms.find(r => r.id === realm)?.name || 'Select Realm'}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown className="h-5 w-5 text-orange-500" />
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              {realms.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    setRealm(r.id);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-orange-50 first:rounded-t-lg last:rounded-b-lg"
                >
                  {r.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;