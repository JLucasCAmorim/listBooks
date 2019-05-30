import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Line, Styles } from "./styles";
import {Header, Left, Right, Title, Body, Button, Icon, Item, Input, Text } from "native-base";

import BooksActions from "../../store/ducks/books";

class Head extends Component {
    renderNavBar () {
        const { search } = this.props
        if (search) {
          return (
            <Header searchBar transparent style={Styles.header}>
              <Item style={Styles.input}>
                <Icon  onPress={() => this.props.callSearch()} name='arrow-back' />
                <Input placeholder='Search' onChangeText={(text) => this.props.filterBook(text)} />
              </Item>
              <Button transparent onPress={() => this.props.callSearch()}>
                <Text style={Styles.text}>Voltar</Text>
              </Button>
            </Header>
          )
        } else {
          return (
            <Header transparent style={Styles.header}>
                <Left>
                    <Button transparent>
                    <Icon type="MaterialIcons" name="reorder" style={Styles.icon} />
                    </Button>
                </Left>
                <Body>
                    <Title style={Styles.title}>Design Books</Title>
                </Body>
                <Right>
                    <Button onPress={() => this.props.callSearch()} transparent>
                    <Icon type="MaterialIcons" name="search" style={Styles.icon} />
                    </Button>
                </Right>
            </Header>
          )
        }
      }
    
    render(){
        return (
            <Container>
                {this.renderNavBar()}
                <Line />
            </Container>
        );
    }
}


const mapStateToProps = ({ books }) => {
    const { search } = books;
    return {
        search
    }
  }
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(BooksActions, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Head);
  