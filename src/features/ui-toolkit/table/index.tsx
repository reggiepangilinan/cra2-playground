import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss';
import { Table, TableHead, TableHeader, TableRow, TableCell } from '../../../common/components/Table';
import CellButton, { CellButtonKind } from '../../../common/components/Table/CellButton';

type Props = {

}

const TableSample: FunctionComponent<Props> = () => {
  const header = <TableHead>
    <TableHeader maxWidth="120px" label="Name" />
    <TableHeader maxWidth="100px" label="Age" />
    <TableHeader label="Favorite Subject" />
    <TableHeader label="Address" />
    <TableHeader maxWidth="200px" label="Description" />
    <TableHeader maxWidth="100px" align="center" label="Actions" />
  </TableHead>;


  return (
    <div>
      <h2>Table</h2>
      <div className={styles.content}>
        <br></br>
        <Table>
          {{
            header,
            rows: [
              <TableRow key={Math.random().toString()}>
                <TableCell>John</TableCell>
                <TableCell>10</TableCell>
                <TableCell>Some description to fill up the space</TableCell>
                <TableCell>This is a super duper long description, because lorem ipsum is booooring</TableCell>
                <TableCell>Sample 5</TableCell>
                <TableCell></TableCell>
              </TableRow>,
              <TableRow key={Math.random().toString()}>
                <TableCell>Paul</TableCell>
                <TableCell>10</TableCell>
                <TableCell>Math</TableCell>
                <TableCell></TableCell>
                <TableCell>Sample 5</TableCell>
                <TableCell></TableCell>
              </TableRow>,
              <TableRow key={Math.random().toString()}>
                <TableCell>Jack</TableCell>
                <TableCell>99</TableCell>
                <TableCell>Science</TableCell>
                <TableCell></TableCell>
                <TableCell>Sample 5</TableCell>
                <TableCell align="center">
                  <CellButton name="edit" type={CellButtonKind.Light} />
                  <CellButton name="delete" type={CellButtonKind.Light} />
                </TableCell>
              </TableRow>
            ]
          }}
        </Table>
      </div>
    </div>
  )
}

export default TableSample;