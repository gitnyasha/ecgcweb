import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import Services from '../components/HomeOne/Services';
import Footer from '../components/_App/Footer';
import dynamic from "next/dynamic";
import Clients from "../components/clients/Clients";
import MakePayment from "../components/Payments/MakePayment";

const ChatBot = dynamic(import('../components/chatbot'), { ssr: false });

const Index = () => {
    return (
        <>
            <Navbar />

            <br/>
            <br/>
            <MainBanner />

            <Services />

            <Clients />

            <MakePayment />

            <Footer />

        </>
    )
}

export default Index;
