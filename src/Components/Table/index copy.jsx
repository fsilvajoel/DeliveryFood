import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, Status, Total, Data) {
  return { id, Status, Total, Data};
}

const rows = [
  createData(1, 'Criado', 81.28, '13/10/2019'),
  createData(2, 'Entregue', 81.28,'13/10/2019'),
  createData(3, 'Criado', 81.28, '13/10/2019'),
  createData(4, 'Entregue', 81.28,'13/10/2019'),
  createData(5, 'Entregue', 81.28,'13/10/2019'),
];

const datatable ={
  thead: ['Id', 'Status', 'Total', 'Data'],
}


export default function SimpleTable(props){
  const {showingData} = props
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="simple table"
        className={classes.table}
      >
        <TableHead>
          <TableRow>
            {showingData.thead.map((row, index) => (
              <TableCell
                align="right"
                key={index}
              >{row} </TableCell>
            ))
            }
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
