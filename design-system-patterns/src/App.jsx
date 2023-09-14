import "./App.css";
import SubscribeForm from "./components/01-layers-pattern";
import InfoForm from "./components/02-split-pattern";
import InfoFormWithColumns from "./components/03-columns-pattern";
import Cards from "./components/04-grid-pattern";
import BundledMenu from "./components/05-inline-bundle-pattern";
import Menu from "./components/06-inline-pattern";
import GiftCardList from "./components/07-pad-pattern";
import Profile from "./components/08-center-pattern";
import NewProductsList from "./components/09-media-wrapper-pattern";
import HeroPage from "./components/10-cover-pattern";
import FinalProject from "./components/11-final-project/main";
import { Container } from "./components/common/items";

function App() {
  return (
    <>
      <Container>
        <h1>A. Layers Pattern</h1>
        <SubscribeForm />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>B. Split Pattern</h1>
        <InfoForm />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>C. Columns Pattern</h1>
        <InfoFormWithColumns />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>D. Grid Pattern</h1>
        <Cards />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>E. Inline Bundle Pattern</h1>
        <BundledMenu />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>F. Inline Pattern</h1>
        <Menu />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>G. Pad Pattern</h1>
        <GiftCardList />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>H. Center Pattern</h1>
        <Profile />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>I. Media Wrapper Pattern</h1>
        <NewProductsList />

        <hr style={{ margin: "2rem 0" }}></hr>

        <h1>J. Cover Pattern</h1>
        <HeroPage />
      </Container>
      <FinalProject />
    </>
  );
}

export default App;
