import { HeaderDefault } from "../../components/HeaderDefault";
import { NavDefault } from "../../components/NavDefault";
import { ReactNode } from "react";
import "./styles.css";
import { MainDefault } from "../../components/MainDefault";

type TemplateDashboardProps = {
  children: ReactNode;
  title: string;
};
const TemplateDashboardDefault = ({
  children,
  title,
}: TemplateDashboardProps) => {
  return (
    <div>
      <HeaderDefault />

      <NavDefault />
      <MainDefault title={title}>{children}</MainDefault>
    </div>
  );
};

export { TemplateDashboardDefault };
