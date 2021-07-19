export default function ErrorScreen(props) {
  console.log("Error Screen", props)
  return (
    <div>
      <h2>Error Screen:</h2>
      <p>{props.error.message}</p>
    </div>
  )
}