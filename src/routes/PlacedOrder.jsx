import { Link } from "react-router-dom";

const PlacedOrder = () => {
  return (
    <>
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Hurry!!! Order Placed</h5>
          <p class="card-text">
            Want to shop more than click on the below button
          </p>
          <Link to="/" class="btn btn-primary">
            Go to Shop
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlacedOrder;
