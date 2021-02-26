import React from "react";

export default function Table({ headersName, rowsData, ...props }) {
  return (
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {headersName &&
                headersName.map((item) => (
                  <th key={"header_" + item}>{item}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {rowsData &&
              rowsData.map((item, index, array) => (
                <Row key={"row_" + index} rowdata={item}></Row>
              ))}
          </tbody>
        </table>
      </div>
  );
}

function Row({ rowdata, ...props }) {
  const tdColumns = [];

  for (const currentColumn in rowdata) {
    tdColumns.push(
      <td key={"column_" + currentColumn}>{rowdata[currentColumn]}</td>
    );
  }

  return <tr>{tdColumns}</tr>;
}
