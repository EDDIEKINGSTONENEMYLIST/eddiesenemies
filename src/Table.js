export default function Table({theadData, tbodyData}) {
   const maxLength = Math.max(tbodyData[0].length, tbodyData[1].length);
  return (
    <table>
      <thead>
        <tr>
          {theadData.map((heading) => {
            return <th key={heading}>{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {[...Array(maxLength)].map((_, index) => {
          return (
            <tr key={index}>
              <td>{index < tbodyData[0].length ? tbodyData[0][index] : ""}</td>
              <td>{index < tbodyData[1].length ? tbodyData[1][index] : ""}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
    }