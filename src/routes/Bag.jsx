import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import EmptyBag from "../components/EmptyBag";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItem = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItem.length === 0 ? (
              <EmptyBag />
            ) : (
              finalItem.map((item) => <BagItem key={item.id} item={item} />)
            )}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
