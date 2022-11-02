import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const Layout = (props) => {
  //NavBar va Footer bao boc cac noi dung con lai
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
