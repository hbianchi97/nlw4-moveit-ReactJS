import '../styles/global.css';

//it's also static but it's re-loaded

function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
