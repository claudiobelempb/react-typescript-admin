// import { mock } from "./mock";

import { ReactNode } from "react";

type TablePropsTitle = {
  children: ReactNode;
  title?: string;
};

// type TablePropsTheadValue = {
//   value: string;
// };

// type TablePropsTbodyValue = {
//   value: string;
// };

// type TableTheadProps = {
//   ths: TablePropsTheadValue[];
// };

// type TableTbodyProps = {
//   trs: TablePropsTbodyValue[];
// };

type Props = TablePropsTitle;

// const headerThead = () => {
//   console.log("thead");
//   return (
//     <thead>
//       <tr>
//         <th scope="col">Head 01</th>
//         <th scope="col">Head 02</th>
//         <th scope="col">Head 03</th>
//         <th scope="col">Head 04</th>
//       </tr>
//     </thead>
//   );
// };
// const headerTbody = () => {
//   return (
//     <tbody>
//       <tr>Body 01</tr>
//       <tr>Body 02</tr>
//       <tr>Body 03</tr>
//       <tr>Body 04</tr>
//     </tbody>
//   );
// };

// function headerTbody({ trs }: TableTbodyProps) {
//   trs.map((value, index) => {
//     console.log(value);
//     return <tr key={index}>{value}</tr>;
//   });
// }

const TableDefault: React.FC<Props> = ({ title }: Props) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export { TableDefault };
