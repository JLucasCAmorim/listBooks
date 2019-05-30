import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BooksActions from "../../store/ducks/books";
/* Presentational */
import { View, Text } from "react-native";
import Styles from "./styles";


class Detail extends Component {
    _renderDescription = () => {
        const { book } = this.props
        if (book.volumeInfo.hasOwnProperty('description')) {
            return book.volumeInfo.description;
        }
        return 'Não há descrição desse produto';
    }
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.text}>{this._renderDescription()}</Text>
            </View>
            )
    }
}

const mapStateToProps = ({ books }) => {
    const { book } = books;
    return {
     book
    }
  }
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(BooksActions, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Detail);
  