import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import toggleLights from './restAPI';

function toggled(event: object, isInputChecked: bool, which) {
    var state = "off"
    if (isInputChecked) {
        state = "on"
    }
    toggleLights(which, state);
}

const colWidth = {
     width: 1,
 };

const LightsTable = () => (
  <Table style={{ width: 600 }}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn style={ colWidth }>Light 1</TableHeaderColumn>
        <TableHeaderColumn style={ colWidth }>Light 2</TableHeaderColumn>
        <TableHeaderColumn style={ colWidth }>Light 3</TableHeaderColumn>
        <TableHeaderColumn style={ colWidth }>Music</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody >
      <TableRow>
        <TableRowColumn style={ colWidth }>
            <Toggle onToggle={(event, isInputChecked) => toggled(event, isInputChecked, "a")} />
        </TableRowColumn>
        <TableRowColumn style={ colWidth }>
            <Toggle onToggle={(event, isInputChecked) => toggled(event, isInputChecked, "b")} />
        </TableRowColumn>
        <TableRowColumn style={ colWidth }>
            <Toggle onToggle={(event, isInputChecked) => toggled(event, isInputChecked, "c")} />
        </TableRowColumn>
        <TableRowColumn style={ colWidth }>
            <Toggle onToggle={(event, isInputChecked) => toggled(event, isInputChecked, "d")} />
        </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);


export default LightsTable;
