import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../context/settings.js';
import { DataGrid } from '@mui/x-data-grid';
import {Box, TextField, Button} from '@mui/material';
import { v4 as uuid } from 'uuid';
import axios from 'axios'

const ToDo = () => {
    let SettingsValues = useContext(SettingsContext); // This is how you bring in context and how you opt into using context in your component.
    console.log(SettingsValues.completed)
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [endIndex, setEndIndex] = useState(SettingsValues.pagination);

    const { handleChange, handleSubmit } = useForm(addItem);

    async function addItem(item){
        // let itemURL = `${process.env.REACT_APP_SERVER}test`
        // const itemResponse = await axios.post(itemURL)
        // console.log(itemResponse)
        item.id = uuid();
        item.complete = false;
        if(!list.includes(item)){
          
          setList([...list, item]);
        }
        else{
          alert('cant add the same item')
        }
    }
    

    function deleteItem(id) {
        const items = list.filter((item) => item.id !== id);
        setList(items);
    }

    function toggleComplete(id) {
        const items = list.map((item) => {
            if (item.id == id) {
                item.complete = !item.complete;
            }
            return item;
        });

        setList(items);
    }
    const completeButton = (id) => {
      return (
        <Button>
          color ="primary"
          onClick={toggleComplete(id)}
        </Button>
      )
    }

    // useEffect(() => {
    //   if(!props.completed){
    //     let incompleteCount = list.filter((item) => !item.complete).length;
    //     setIncomplete(incompleteCount);
    //   }
    //   else{

    //   }
    //     document.title = `To Do List: ${incomplete}`;
    // }, [list]);

    const paginate = () => {
        let startIndex = endIndex - SettingsValues.pagination;

        return list.slice(startIndex, endIndex);
    };

    const handleNext = (e) => {
        e.preventDefault();
        setEndIndex(endIndex + SettingsValues.pagination);
    };
    const handlePrev = (e) => {
        e.preventDefault();
        setEndIndex(endIndex - SettingsValues.pagination);
    };

    const columns = [
        { field: 'id', headerName: 'id', width: 200 },
        { field: 'complete', headerName: 'Complete', width: 200 },
        { field: 'text', headerName: 'To-Do', width: 400 },
        { field: 'assignee', headerName: 'Assigned To', width: 130 },
        {
            field: 'difficulty',
            headerName: 'Difficulty',
            type: 'number',
            width: 90,
        },
        { field: 'completed', 
        headerName: 'completed', 
        width: 150,
        // renderCell: completeButton()
        }
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
      <>
          <Box
              component='form'
              sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete='off'
              onSubmit={handleSubmit}
          >
              <div>
                  <TextField
                      name='assignee'
                      label='Assign-To'
                      multiline
                      maxRows={4}
                      // value={list}
                      onChange={handleChange}
                      variant='standard'
                  />
                  <TextField
                      name='difficulty'
                      label='Difficulty(1-5)'
                      placeholder='Placeholder'
                      multiline
                      variant='standard'
                      onChange={handleChange}
                  />
                  <TextField
                      name='text'
                      label='To-Do'
                      multiline
                      maxRows={4}
                      // value={list}
                      onChange={handleChange}
                      variant='standard'
                  />
                  <button type='submit'>Add Item</button>
              </div>
          </Box>
          <div style={{ height: 400, width: '100%' }}>
            {SettingsValues.completed? list : list.filter((item) => { !item.complete})}
              <DataGrid
                  rows={list}
                  columns={columns}
                  pageSize={SettingsValues.pagination}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  />
          </div>
      </>
  );
};

export default ToDo;