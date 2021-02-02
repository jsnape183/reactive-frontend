export interface IPropComponentProps {
  name: string;
  value: any;
  onValueChanged: (key: string, value: any) => void;
}
