import React from 'react';
import { Server } from 'lucide-react';

const ProxmoxLogo = () => {
  return (
    <div className="flex items-center gap-2 text-orange-500">
      <Server className="h-10 w-10" />
      <span className="text-2xl font-bold">SETUPBOXS VE</span>
    </div>
  );
};

export default ProxmoxLogo;