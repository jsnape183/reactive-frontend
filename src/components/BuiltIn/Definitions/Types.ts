interface IReactiveCode {
  component: (node: any, props: any, includeWrapper: boolean) => any;
  imports: string;
  importsFrom: string;
  defaultImport: boolean;
}
interface IReactiveComponent {
  name: string;
  toolboxIcon: any;
  code: IReactiveCode;
  props: any;
  allowsChildren: boolean;
}

export default IReactiveComponent;
