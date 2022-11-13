declare module '*.svg' {
  import { SVGProps } from 'react-native-svg';
  const content: React.FC<SVGProps>;
  export default content;
}
