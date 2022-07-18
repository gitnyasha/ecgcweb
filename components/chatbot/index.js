import React from "react";
import ChatBot from 'react-simple-chatbot';
import Wrapper from './styles';
import steps from './steps';
import {ThemeProvider} from 'styled-components';

// all available props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#1B75BA',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#1B75BA',
    botFontColor: '#fff',
    userBubbleColor: '#FFCA05',
    userFontColor: '#fff',
    floatingStyle: '100px',
    avatar: '/images/profile.png'
};


function ChatbotWrapper() {

    const config = {
        width: "300px",
        height: "400px",
        floating: true,
        paddingBottom: '500px'
    };

   const handleEnd = ({ steps, values }) => {
        // console.log(steps);
        // console.log(values);
        //alert(`${JSON.stringify(values)}`);
       console.table(values)
    }

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={steps}
                floating ={true}
                {...config}
                handleEnd={handleEnd}
                headerTitle="ECGC"
            />
        </ThemeProvider>

    );
}

export default ChatbotWrapper;