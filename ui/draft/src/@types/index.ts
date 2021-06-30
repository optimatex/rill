export type OnSubmit = (html: string) => void;

export interface IEditorProps {
  editorKey: string;
  placeholder?: string;
  onSubmit: OnSubmit;
  clearOnSubmit?: boolean;
}
