import { useNavigate } from "react-router-dom";

const Second = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>About Page</h3>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/counter");
        }}
      >
        Counter
      </button>
    </div>
  );
};

export default Second;
