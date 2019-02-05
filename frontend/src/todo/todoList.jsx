import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    


    const renderRows = () => {
        const list = props.list || []
        return list.map(tata => (
            <tr key={tata._id}>
                <td className={tata.done ? 'markedAsDone' : ''} >{tata.description}</td>
                <td>
                    <IconButton style='success' icon='check' onClickii={() => props.handleMarkAsDone(tata)} hide={tata.done}></IconButton>
                    <IconButton style='warning' icon='undo' onClickii={() => props.handleMarkAsPending(tata)} hide={!tata.done}></IconButton>
                    <IconButton style='danger' icon='trash-o' onClickii={() => props.handleRemove(tata)} hide={!tata.done}></IconButton>
                </td>
            </tr>
        ))

        // return (
        //     <tr><td>ok</td></tr>
        // )
    }

    return (
        <table className='table'>

            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )










    // <div>
    //     <h1>List</h1>
    // </div>
    //)
}