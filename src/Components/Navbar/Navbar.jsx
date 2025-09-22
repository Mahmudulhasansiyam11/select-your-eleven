import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar.png"
const Navbar = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="navbar">
        <div className="flex-1">
          <a className="">
            <img src={navImg}></img>
          </a>
        </div>
        <div className="flex justify-center items-center gap-1">
            <p className="font-bold">0 <span>Coin</span></p>
            <img src={dollarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
