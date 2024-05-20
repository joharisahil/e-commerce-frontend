import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bagActions } from "../store/bagSlice";

const PlacedOrder = () => {
  const dispatch = useDispatch();

  const handleBagOnPlacedOrder = () => {
    dispatch(bagActions.emptyBag());
  };

  return (
    <>
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Hurry!!! Order Placed</h5>
          <p class="card-text">
            Want to shop more than click on the below button
          </p>
          <Link
            to="/"
            class="btn btn-primary"
            onClick={() => {
              handleBagOnPlacedOrder();
            }}
          >
            Go to Shop
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlacedOrder;
