import React from 'react';
import { Settings } from 'lucide-react';
import { useBuilderStore } from '../../store/builder';

export const PropertyEditor: React.FC = () => {
  const { selectedComponent, components, updateComponent } = useBuilderStore();

  const component = components.find((c) => c.id === selectedComponent);

  if (!component) {
    return (
      <div className="w-64 bg-white border-l border-gray-200 p-4">
        <div className="flex items-center mb-4">
          <Settings className="w-5 h-5 mr-2" />
          <h2 className="text-lg font-semibold">Properties</h2>
        </div>
        <p className="text-gray-400 text-center">Select a component to edit its properties</p>
      </div>
    );
  }

  return (
    <div className="w-64 bg-white border-l border-gray-200 p-4">
      <div className="flex items-center mb-4">
        <Settings className="w-5 h-5 mr-2" />
        <h2 className="text-lg font-semibold">Properties</h2>
      </div>
      <div className="space-y-4">
        {Object.entries(component.props).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {key}
            </label>
            <input
              type="text"
              value={value as string}
              onChange={(e) =>
                updateComponent(component.id, { [key]: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};