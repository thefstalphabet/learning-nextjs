import Menu from "../components/Menu";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
