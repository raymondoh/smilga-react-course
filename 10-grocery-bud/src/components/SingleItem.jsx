const SingleItem = ({ item, onRemoveItem, onEditItem }) => {
  return (
    <div className="single-item">
      <input type="checkbox" checked={item.completed} onChange={e => onEditItem(item.id)} />
      <p style={{ textTransform: "capitalize", textDecoration: item.completed ? "line-through" : "" }}>{item.name}</p>
      <button className="btn remove-btn" type="button" onClick={() => onRemoveItem(item.id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
