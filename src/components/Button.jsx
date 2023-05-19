export default function Button(props) {
  return (
    <button className="custom-button" {...props}>
      {props.children}
    </button>
  );
}
