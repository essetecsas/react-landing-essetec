export const ListGroup = ({ items, itemId, onSelect }) => {
  return (
    <>
      <div className="btn-group-vertical w-100 mb-4">
        {items.map((item: any, index: number) => (
          <button
            key={index}
            type="button"
            className={`mb-1 btn btn-primary w-100 ${
              itemId === item.id ? "active" : ""
            }`}
            onClick={() => onSelect(item.id)}
            aria-current="true"
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};
