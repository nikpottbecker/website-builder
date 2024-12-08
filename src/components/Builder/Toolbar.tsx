import React from 'react';
import { Save, Code, Upload, Undo, Redo } from 'lucide-react';

export const Toolbar: React.FC = () => {
  return (
    <div className="h-14 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Undo className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Redo className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Code className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <Save className="w-5 h-5" />
        </button>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <Upload className="w-4 h-4 mr-2" />
          Deploy
        </button>
      </div>
    </div>
  );
};