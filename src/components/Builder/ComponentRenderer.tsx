import React from 'react';
import { BuilderComponent } from '../../types/builder';
import { useBuilderStore } from '../../store/builder';
import { componentMap } from './components';

interface ComponentRendererProps {
  component: BuilderComponent;
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = ({ component }) => {
  const { setSelectedComponent } = useBuilderStore();
  const Component = componentMap[component.type];

  if (!Component) {
    return <div>Component type not found: {component.type}</div>;
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setSelectedComponent(component.id);
      }}
      className="relative group"
    >
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 pointer-events-none" />
      <Component {...component.props} />
    </div>
  );
}