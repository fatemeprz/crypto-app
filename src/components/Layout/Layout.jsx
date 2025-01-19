import Footer from "../modules/Footer";
import Header from "../modules/Header";


function Layout({ children }) {

  return (
    <>
      <div className="max-w-normal m-auto px-10 py-3">
        <Header/>
        <div className="min-h-screen">{children}</div>
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
