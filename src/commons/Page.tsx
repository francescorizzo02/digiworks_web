//importing commons
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function Page(props: PageInterface) {
  
  //extracting from props
  const {children} = props;
  
  return <>
    <Navbar/>
    <div className="dw__container">
      <div className="dw__container__content">
        {children}
      </div>
    </div>
    <Footer/>
  </>
}

interface PageInterface {
  children: any,
}