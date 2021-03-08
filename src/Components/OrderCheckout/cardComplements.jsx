import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { getComplements } from '../../shared/services/Api/productsApi';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const List = styled.table`
  /* display: flex; */
  flex-direction: row;
  /* justify-content: space-between; */
  width: 100%;
  /* list-style-type: none; */
  tbody {
    width: 100%;
  }
  tr {
    width: 100%;
  }
  td {
    width: 25%;
  }
`;
const Button = styled.button`
  background-color: white;

  border: 2px solid #757575;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  margin: 3px;
  font-size: 20px;
  padding: 0px;
`;
const Count = styled.div`
  input {
    vertical-align: text-bottom;
    border: 2px solid #757575;
    border-radius: 3px;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
  }
`;
function CardComplements() {
  const [count, setCount] = useState(0);
  const [complements, setComplements] = useState([]);
  const recieveComplements = async () => {
    const result = await getComplements();
    setComplements(result);
  };

  useEffect(() => {
    recieveComplements();
  }, []);

  return (
    <>
      <h3>Selecione os Complementos desejados</h3>
      {complements?.map((data) => (
        <List key={data.name}>
          <tbody>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>{data.value}</td>
              <td>{data.name}</td>
              <td>
                <Count>
                  <input value={count} />
                  <Button onClick={() => setCount(count < data?.maximum ? count + 1 : data.maximum)}>
                    <AddIcon />
                  </Button>
                  <Button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                    <RemoveIcon />
                  </Button>
                </Count>
              </td>
            </tr>
          </tbody>
        </List>
      ))}
    </>
  );
}

export default CardComplements;
