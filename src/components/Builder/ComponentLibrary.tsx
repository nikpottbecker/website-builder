import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { PanelLeftOpen } from 'lucide-react';
import { componentLibrary } from '../../config/components';
import { ComponentDefinition } from '../../types/builder';

export const ComponentLibrary: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center mb-4">
        <PanelLeftOpen className="w-5 h-5 mr-2" />
        <h2 className="text-lg font-semibold">Components</h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {componentLibrary.map((component) => (
          <DraggableComponent key={component.id} component={component} />
        ))}
      </div>
    </div>
  );
};

interface DraggableComponentProps {
  component: ComponentDefinition;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ component }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: component.id,
    data: component,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 1000,
      }
    : undefined;

  const Icon = component.icon;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="p-2 border border-gray-200 rounded cursor-move hover:border-blue-500 transition-colors bg-white"
    >
      <div className="flex flex-col items-center">
        <Icon className="w-6 h-6 mb-1" />
        <span className="text-sm">{component.label}</span>
      </div>
    </div>
  );
};