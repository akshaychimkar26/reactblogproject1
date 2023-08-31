import { Logo, Nav , LogoMobile, Footer} from "../../Components";
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import Store from "../../Utility/Context/contextAPI";
import "../../App.css";
import TopPots from "./TopPsts";
const Home = () => {
  return (
    <>
    <div className='MMb' ><LogoMobile/></div>
    <div className='MLc' ><Logo/>
      <Nav/></div>
      <Store>
        <Banner />
        <Latest />
        <div className="mC">
          <div className="sC">
            <div className="hC">
              <LatestArticle />

              <TopPots />
            </div>
          </div>
        </div>
        </Store>
        <Footer/>
    </>
  );
};

export default Home;