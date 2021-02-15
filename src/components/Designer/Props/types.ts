export interface IPropComponentProps {
  propKey: string;
  name: string;
  value: any;
  onValueChanged: (key: string, value: any) => void;
  customProps: any;
}
