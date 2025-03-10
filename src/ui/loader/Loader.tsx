import { Spin } from "antd";
import "antd/dist/reset.css";

const Loader: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
