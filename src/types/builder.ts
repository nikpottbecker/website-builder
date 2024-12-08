export interface ComponentDefinition {
  id: string;
  type: string;
  label: string;
  icon: string;
  defaultProps: Record<string, any>;
}

export interface BuilderComponent {
  id: string;
  type: string;
  props: Record<string, any>;
  children?: BuilderComponent[];
}

export interface BuilderState {
  components: BuilderComponent[];
  selectedComponent: string | null;
  isDragging: boolean;
}

export interface BuilderStore extends BuilderState {
  addComponent: (component: BuilderComponent) => void;
  removeComponent: (id: string) => void;
  updateComponent: (id: string, props: Record<string, any>) => void;
  setSelectedComponent: (id: string | null) => void;
  setIsDragging: (isDragging: boolean) => void;
}