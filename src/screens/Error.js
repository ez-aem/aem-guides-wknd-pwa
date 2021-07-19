export default function ErrorScreen({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <span>{error.message}</span>
    </div>
  );
}