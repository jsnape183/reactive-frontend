import TextPropsBox from "./TextPropsBox";
import { IReactiveComponentProp } from "../Types";

export const generateTextPropsBox = (
  key: string,
  name: string,
  defaultValue: any
): IReactiveComponentProp => {
  return {
    key: key,
    name: name,
    defaultValue: defaultValue,
    component: (
      key: string,
      name: string,
      value: any,
      onChange: (key: string, value: any) => void
    ): React.ReactNode => (
      <>
        <TextPropsBox
          key={key}
          propKey={key}
          name={name}
          value={value}
          onValueChanged={onChange}
        />
      </>
    ),
  };
};

export { TextPropsBox };
