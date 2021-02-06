import React from 'react';
import {Button, Table} from 'reactstrap';

const WorkoutTable = (props) => {
  const deleteWorkout = (workout) => {
  fetch(`http://localhost:4000/log/${workout.id}`, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': props.token
    })
  })
  .then(() => props.fetchWorkouts())
}

const workoutMapper = () => {
  return props.workouts.map((workout, index) => {
    return(
      <tr key={index}>
        <th scope="row">{workout.id}</th>
        <td>{workout.result}</td>
        <td>{workout.definition}</td>
        <td>{workout.description}</td>
        <td>
          <Button color="warning" onClick={() => {props.editUpdateWorkout(workout); props.updateOn()}}>Update</Button>
          <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button>
        </td>
      </tr>
    )
  })
}


    return(
        <>
          <h3>Workout History</h3>
          <hr/>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Result</th>
                <th>Definition</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {workoutMapper()}
            </tbody>
          </Table>
        </>
    )
}


export default WorkoutTable;