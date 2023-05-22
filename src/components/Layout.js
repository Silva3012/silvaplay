import Header from "./Header";
import Footer from "./Footer";

// Defining the layout for every page
export default function Layout({ children }) {
    return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}