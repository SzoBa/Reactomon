const SimpleItem = (props) => {
  return (
    <div className="simpleData">
      <p>{props.attribute + ": " + props.simpleData.toString()}</p>
    </div>
  );
};

export default SimpleItem;
