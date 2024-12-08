import React from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useBuilderStore } from './store/builder';
import { ComponentLibrary } from './components/Builder/ComponentLibrary';
import { Canvas } from './components/Builder/Canvas';
import { PropertyEditor } from './components/Builder/PropertyEditor';
import { Toolbar } from './components/Builder/Toolbar';

function App() {
  const { addComponent } = useBuilderStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === 'canvas') {
      const componentData = active.data.current;
      addComponent({
        id: `${componentData.type}-${Date.now()}`,
        type: componentData.type,
        props: { ...componentData.defaultProps },
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-screen flex flex-col">
        <Toolbar />
        <div className="flex-1 flex overflow-hidden">
          <ComponentLibrary />
          <Canvas />
          <PropertyEditor />
        </div>
      </div>
    </DndContext>
  );
}

export default App;