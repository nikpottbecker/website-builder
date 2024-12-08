import { ComponentDefinition } from '../types/builder';
import {
  Type,
  Image,
  Layout,
  FormInput,
  Navigation,
  Footer,
} from 'lucide-react';

export const componentLibrary: ComponentDefinition[] = [
  {
    id: 'heading',
    type: 'heading',
    label: 'Heading',
    icon: Type,
    defaultProps: {
      text: 'New Heading',
      level: 'h1',
    },
  },
  {
    id: 'image',
    type: 'image',
    label: 'Image',
    icon: Image,
    defaultProps: {
      src: 'https://images.unsplash.com/photo-1706721554319-9c1a0d317683',
      alt: 'Image description',
    },
  },
  {
    id: 'section',
    type: 'section',
    label: 'Section',
    icon: Layout,
    defaultProps: {
      backgroundColor: '#ffffff',
      padding: '4rem',
    },
  },
  {
    id: 'form',
    type: 'form',
    label: 'Form',
    icon: FormInput,
    defaultProps: {
      submitText: 'Submit',
    },
  },
  {
    id: 'navbar',
    type: 'navbar',
    label: 'Navigation',
    icon: Navigation,
    defaultProps: {
      logo: 'Logo',
      links: [],
    },
  },
  {
    id: 'footer',
    type: 'footer',
    label: 'Footer',
    icon: Footer,
    defaultProps: {
      copyright: '© 2024 Your Company',
    },
  },
];