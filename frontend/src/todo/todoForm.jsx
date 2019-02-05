import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            {/* <h1>Form</h1> */}
            
            <Grid colsDetTras='12 9 10'>
            {/* <div className='col-xs-12 col-sm-9 col-md-10'> */}

                <input 
                        id='description' 
                        className='form-control' 
                        placeholder='Add a task' 
                        value={props.descriptitions} 
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}></input>
                
            {/* </div> */}
            </Grid>

            <Grid colsDetTras='12 3 2'>    
            {/* <div className='col-xs-12 col-sm-3 col-md-2'> */}

                <IconButton style='primary' icon='plus' onClickii={props.handleAdd}></IconButton>
                {/* <button className='btn btn-primary'>
                    <i className='fa fa-plus'></i>
                </button> */}

                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>

            {/* </div> */}
            </Grid>
        </div>
    )
}



