import { useLocation } from "react-router-dom";

const Card = () => {
  const location = useLocation();
  const { from } = location.state;
  return <div>Thankyou {from}</div>;
};

export default Card;
