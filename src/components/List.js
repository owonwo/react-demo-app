import React, { useState } from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const ListStyle = styled.li`
    display: block;
    padding: 1rem 1.5rem;
    display: grid;
    align-items: center;
    grid-template-columns: 50px 1fr minmax(10px, 150px);

    button {
        margin-left: .5rem;
    }
`

export const ListItem = ({ task, onDelete, onChecked }) => {
    return (
        <ListStyle>
            <input type="checkbox" checked={task.checked} onChange={onChecked} /> 
            {!task.checked
                ? <span>{task.name}</span>
                :<strike>{task.name}</strike>
            }
            <Button small regular
                onClick={onDelete}>
                Delete
            </Button>
        </ListStyle>
    )
}

ListItem.propTypes = {
    task: t.object.isRequired,
    onDelete: t.func.isRequired,
    onChecked: t.func.isRequired,
}

const List = styled.ul`
    padding: 0;
    list-style: none;

    > li + li {
        border-top: solid 1px #ddd;
    }
`

List.Item = ListItem

export default List;