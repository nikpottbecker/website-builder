import { Heading } from './Heading';
import { Image } from './Image';
import { Section } from './Section';
import { Form } from './Form';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const componentMap = {
  heading: Heading,
  image: Image,
  section: Section,
  form: Form,
  navbar: Navbar,
  footer: Footer,
} as const;