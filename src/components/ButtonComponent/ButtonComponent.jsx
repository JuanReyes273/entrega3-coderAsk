import "./button.css";

function ButtonComponent(props) {
  const { children} = props;

  return (
    <>
      <button className="btn">
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;