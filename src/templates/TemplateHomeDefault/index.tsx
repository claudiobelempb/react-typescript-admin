import { ReactNode } from "react";
import "./styles.css";

type TemplateHomeProps = {
  children: ReactNode;
  title: string;
};
const TemplateHomeDefault = ({ children, title }: TemplateHomeProps) => {
  return (
    <>
      <h1>HomeDefault</h1>
    </>
  );
};

export { TemplateHomeDefault };
