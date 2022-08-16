import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Services from "../components/HomeOne/Services";
import Footer from "../components/_App/Footer";
import dynamic from "next/dynamic";
import Clients from "../components/clients/Clients";
import MakePayment from "../components/Payments/MakePayment";
import { backend } from "./api/api";

const ChatBot = dynamic(import("../components/chatbot"), { ssr: false });

const Index = () => {
  React.useEffect(() => {
    backend
      .get("/api/track-visitors")
      .then((response) => {
        setCareers(response.data.careers);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Navbar />

      <br />
      <br />
      <MainBanner />

      <Services />

      <Clients />

      <MakePayment />

      <Footer />
    </>
  );
};

export default Index;
