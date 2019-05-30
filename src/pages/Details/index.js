import React, { Component } from "react";
import Head from "../../components/Header/back";
import SubHeader from "../../components/SubHeader";
import Detail from "../../components/Detail";
import { Styles, Content } from "./styles";
import { Container } from "native-base";

export default class Details extends Component {
    render() {
        return (
            <Container style={Styles.container}>
                <Head navigation={this.props.navigation} />
                <SubHeader />
                <Content>
                    <Detail />
                </Content>
            </Container>
        );
    }
}
