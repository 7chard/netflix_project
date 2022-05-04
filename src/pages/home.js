import React from "react";
import { JumbotronContainer } from '../containers/Jumbotron';
import OptForm from "../components/opt-form";
import Feature from "../components/feature";
import { FooterContainer } from '../containers/Footer';
import { FaqsContainer } from '../containers/Faqs';
import { HeaderContainer } from '../containers/Header';


const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV Programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhare. Cancel at any time.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email adress" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    );
}

export default Home;