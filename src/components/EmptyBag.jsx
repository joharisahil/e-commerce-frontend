import { useNavigate } from "react-router-dom";

const EmptyBag = () => {
  const navigate = useNavigate();
  const handleShopBtn = () => {
    navigate("/");
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">No Items Added!!</h5>
          <p className="card-text">
            Click the below button so you that can reach to store for adding
            some eclusive clothes
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleShopBtn();
            }}
          >
            Make me to Shop
          </button>
        </div>
      </div>
    </>
  );
};

export default EmptyBag;
