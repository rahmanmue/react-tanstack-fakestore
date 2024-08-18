import "./card.scss";

const Card = ({ ...props }) => {
  return (
    <div className="card p-3 shadow-lg border-round-md bg-white">
      <div className="p-card p-component p-0">
        <div className="p-card-body flex p-0 gap-3">
          <img
            src={props.image}
            className="img-responsive border-round-md shadow-sm"
            alt="img-store"
            style={{ width: "150px", height: "100%", objectFit: "cover" }}
          />
          <div className="px-3 flex flex-column justify-content-between">
            <div className="p-card-title text-xl font-semibold">
              {props.title}
            </div>
            <div className="p-card-category text-sm text-gray-500">
              Category: {props.category}
            </div>
            <div className="p-card-price text-lg font-bold text-green-600">
              {props.price}
            </div>
            <div className="p-card-content text-sm text-gray-700">
              <p className="m-0">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
