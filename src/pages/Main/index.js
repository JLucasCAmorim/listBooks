import React, { Component } from "react";
import Head from "../../components/Header";
import BooksList from "../../components/Books";
import { Styles } from "./styles";
import { Container } from "native-base";

export default class Main extends Component {
    render() {
        return (
            <Container style={Styles.container}>
                <Head />
                <BooksList navigation={this.props.navigation} />
            </Container>
        );
    }
}
