import { TableDefault } from "../../components/TableDefault";
import "./styles.css";
import { TemplateDashboardDefault } from "../../templates/TemplateDashboardDefault";

const UsersDefault = () => {
  return (
    <TemplateDashboardDefault title="Users">
      <TableDefault title={"Users List"}>
        <h1>Table</h1>
      </TableDefault>
    </TemplateDashboardDefault>
  );
};

export { UsersDefault };
