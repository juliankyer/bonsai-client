import React, { Component } from 'react';

import { DataTable, Tile, Button } from 'bonsai-components-react';
import './App.css';

const {
  TableContainer,
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarSearch,
  TableToolbarContent,
  TableToolbarAction,
} = DataTable;

export class App extends Component {
  render() {
    return (
      <Tile className="App">
        <DataTable
          rows={[
            {
              id: 'a',
              song: 'Hello There',
              artist: 'Dillon Francis',
            },
            {
              id: 'b',
              song: 'Touch',
              artist: '3lau',
            },
            {
              id: 'c',
              song: 'Hot Steppa',
              artist: 'Bad Royale',
            },
          ]}
          headers={[
            { key: 'song', header: 'Song' },
            { key: 'artist', header: 'Artist' },
          ]}
          render={({
            rows,
            headers,
            getHeaderProps,
            getSelectionProps,
            onInputChange,
          }) => (
            <TableContainer title="Track List">
              <TableToolbar>
                <TableToolbarSearch onChange={onInputChange} />
                <TableToolbarContent>
                  <TableToolbarAction
                    iconName="download"
                    iconDescription="Download"
                    // onClick={action('TableToolbarAction - Download')}
                  />
                  <TableToolbarAction
                    iconName="edit"
                    iconDescription="Edit"
                    // onClick={action('TableToolbarAction - Edit')}
                  />
                  <TableToolbarAction
                    iconName="settings"
                    iconDescription="Settings"
                    // onClick={action('TableToolbarAction - Settings')}
                  />
                  <Button
                    onClick={() => console.log('boom button')}
                    small
                    kind="primary"
                  >
                    Add new
                  </Button>
                </TableToolbarContent>
              </TableToolbar>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map(header => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableSelectRow {...getSelectionProps({ row })} />
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        />
      </Tile>
    );
  }
}

export default App;
