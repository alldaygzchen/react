// import BirthdayBuddy from './components/birthday-buddy/BirthdayBuddy';
// import Tours from './components/tours/Tours';
// import Reviews from './components/reviews/Reviews';
// import Accordion from './components/accordion/Accordion';
// import AccordionAlt from './components/accordionalt/AccordionAlt';
// import Tabs from './components/tabs/Tabs';
// import Menu from './components/menu/Menu';
// import Slider from './components/slider/Slider';
// import Lorem from './components/lorem/Lorem';
// import ColorGenerator from './components/color-generator/ColorGenerator';
// import GroceryBud from './components/grocery-bud/groceryBud';
// import GroceryBudAlt from "./components/grocery-budalt/groceryBudAlt";
// import NavbarComponent from "./components/navBar/NavbarComponent";
// import { AppProvider } from "./components/Panel/context";
// import Panel from "./components/Panel/Panel";
// import { AppProvider } from './components/frontPage/Context';
// import FrontPage from './components/frontPage/frontPage';
import { AppProvider } from './components/cart/context';
import Cart from './components/cart/Cart';
function App() {
  return (
    <>
      {/* <BirthdayBuddy /> */}
      {/* <Tours /> */}
      {/* <Reviews /> */}
      {/* <Accordion /> */}
      {/* <AccordionAlt /> */}
      {/* <Menu /> */}
      {/* <Tabs /> */}
      {/* <Slider /> */}
      {/* <Lorem /> */}
      {/* <ColorGenerator /> */}
      {/* <GroceryBud /> */}
      {/* <GroceryBudAlt /> */}
      {/* <NavbarComponent /> */}
      {/* <AppProvider>
        <Panel />
      </AppProvider> */}
      {/* <AppProvider>
        <FrontPage />
      </AppProvider> */}
      <AppProvider>
        <Cart />
      </AppProvider>
    </>
  );
}

export default App;
