import HomeScreen from "../HomeScreen/HomeScreen";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <HomeScreen />
    </header>
  );
}

export default Header;
