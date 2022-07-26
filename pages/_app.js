import "../public/css/bootstrap.min.css";
import "../public/css/animate.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "../public/css/meanmenu.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import "../public/css/styles.module.css";
import "../public/css/fancy.min.css";
import Layout from "../components/_App/Layout";
import FormProvider from "../context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </Layout>
  );
};

export default MyApp;
