import Logo from "./Logo";
import "./Header.css";
import Menutab from "./Menutab";
const Headerframe = () => {
  return (
    <div className="header-frame">
      <Logo />
      <Menutab />
    </div>
  );
};
export default Headerframe;
