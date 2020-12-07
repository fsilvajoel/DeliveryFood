import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;
`;
const Button = styled.button`
  background-color: white;

  border: 2px solid #757575;
  border-radius: 3px;
  width: 25px;
  height: 25px;
  margin: 3px;
`;
const Count = styled.div`
  input {
    border: 2px solid #757575;
    border-radius: 3px;
    width: 25px;
    height: 25px;
    text-align: center;
  }
`;
function CardComplements() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Selecione os Complementos desejados</h3>
      <List>
        <div>
          <Checkbox />
          Hashi
        </div>
        <Count>
          <input value={count} />
          <Button onClick={() => setCount(count + 1)}> +</Button>
          <Button onClick={() => setCount(count > 0 ? count - 1 : 0)}> -</Button>
        </Count>
      </List>
      <List>
        <div>
          <Checkbox />
          Shoyu
        </div>
        <Count>
          <input value={count} />
          <Button onClick={() => setCount(count + 1)}> +</Button>
          <Button onClick={() => setCount(count > 0 ? count - 1 : 0)}> -</Button>
        </Count>
      </List>
      <List>
        <div>
          <Checkbox />
          Wakame
        </div>
        <Count>
          <input value={count} />
          <Button onClick={() => setCount(count + 1)}> +</Button>
          <Button onClick={() => setCount(count > 0 ? count - 1 : 0)}> -</Button>
        </Count>
      </List>
      <List>
        <div>
          <Checkbox />
          Wasabi
        </div>
        <Count>
          <input value={count} />
          <Button onClick={() => setCount(count + 1)}> +</Button>
          <Button onClick={() => setCount(count > 0 ? count - 1 : 0)}> -</Button>
        </Count>
      </List>
    </>
  );
}

export default CardComplements;
