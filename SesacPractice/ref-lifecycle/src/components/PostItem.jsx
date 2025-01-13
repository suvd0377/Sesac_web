export default function PostItem({ id, title, body }) {
  return (
    <div style={{ border: '2px solid blue' }}>
      <div>
        <span>No.{id}</span>
        <span>No.{title}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
