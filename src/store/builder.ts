import { create } from 'zustand';
import { BuilderStore, BuilderComponent } from '../types/builder';

export const useBuilderStore = create<BuilderStore>((set) => ({
  components: [],
  selectedComponent: null,
  isDragging: false,

  addComponent: (component) =>
    set((state) => ({
      components: [...state.components, component],
      selectedComponent: component.id,
    })),

  removeComponent: (id) =>
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
      selectedComponent: state.selectedComponent === id ? null : state.selectedComponent,
    })),

  updateComponent: (id, props) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, props: { ...c.props, ...props } } : c
      ),
    })),

  setSelectedComponent: (id) =>
    set({
      selectedComponent: id,
    }),

  setIsDragging: (isDragging) =>
    set({
      isDragging,
    }),
}));