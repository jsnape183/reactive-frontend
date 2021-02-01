export interface ITreeNode {
  id: string;
  type: string;
  props: any;
  children: ITreeNode[];
  allowsChildren: boolean;
}
