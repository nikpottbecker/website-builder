import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useBuilderStore } from '../../store/builder';
import { ComponentRenderer } from './ComponentRenderer';

export const Canvas: React.FC = () => {
  const { components, selectedComponent } = useBuilderStore();
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  return (
    <div
      ref={setNodeRef}
      className="flex-1 bg-gray-50 p-8 overflow-auto min-h-screen"
      onClick={() => selectedComponent && useBuilderStore.getState().setSelectedComponent(null)}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-lg min-h-[calc(100vh-4rem)] p-4">
        {components.map((component) => (
          <ComponentRenderer key={component.id} component={component} />
        ))}
        {components.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-400">
            <p>Drag and drop components here to start building</p>
          </div>
        )}
      </div>
    </div>
  );
};