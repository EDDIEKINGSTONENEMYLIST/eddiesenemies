export default function Table({theadData, tbodyData}) {
      return (
        <table>
        <thead>
          <tr>
            {theadData.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {tbodyData[0].map((enemy, index) => {
          return (
            <tr key={index}>
              <td>{enemy}</td>
              <td>{tbodyData[1][index]}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
      );
    }