import React from 'react';

export const Table = (props) => {
    return <table>
        {props.children}
    </table>
}

export const Row = (props) => {
    return <tr>{props.children}</tr>
}

export const Cell = (props) => {
    return <td>{props.children}</td>
}

Table.Row = Row
Table.Cell = Cell

export default Table