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


export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="simple table"
        className={classes.table}
      >
        <TableHead>
          <TableRow>
            {datatable.thead.map((data)=>(
              <TableCell align="center">{data}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              style={{backgroundColor:'#fff'}}
            >
              <TableCell
                align="center"
                component="th"
                scope="row"
              >
                {row.id}
              </TableCell>
              <TableCell  align="center">{row.Status}</TableCell>
              <TableCell align="center">{row.Total}</TableCell>
              <TableCell align="center">{row.Data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
