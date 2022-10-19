const WorkoutDetails = ({ workout }) => {

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Name: </strong>{workout.load}</p>
      <p><strong>Phone Number: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails
