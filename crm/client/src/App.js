import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Customer from './components/Customer'
import Papar from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "989861",
    gender: "남자",
    job: " 대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "홍광표",
    birthday: "283901",
    gender: "남자",
    job: " 대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "이제동",
    birthday: "289208",
    gender: "남자",
    job: " 대학생",
  },
];

class App extends Component {
  
  render() {
    const { classes } = this.props;
    return (
    
      <Papar className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map((c) => {
                return (
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
                )
              })
            }
          </TableBody>
        </Table>
      </Papar>
    );
  }
  
}

export default withStyles(styles)(App);
