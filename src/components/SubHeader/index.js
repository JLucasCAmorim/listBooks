import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BooksActions from "../../store/ducks/books";
/* Presentational */
import { View, Text, Image } from 'react-native';
import Button from '../Button';
import { Icon } from "native-base";
import Styles from './styles';


class SubHeader extends Component {
    _renderPrice = () => {
        const { book } = this.props
        if (book.saleInfo.hasOwnProperty('listPrice')) {
            const currency = book.saleInfo.listPrice.currencyCode === 'BRL' ?  'R$' : book.saleInfo.listPrice.currencyCode;
            return currency + book.saleInfo.listPrice.amount;
        }
        return 'Não está à venda';
    }
    _renderReviews = () => {
        const { book } = this.props
        
        if (book.volumeInfo.hasOwnProperty('averageRating')) {
            switch (book.volumeInfo.averageRating.toFixed(0)){
                case "0":
                    return (
                        <View style={Styles.profileContainer}>
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                        </View>
                    )
                case "1":
                    return (
                        <View style={Styles.reviewContainer}>
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                        </View>
                    )
                case "2":
                    return (
                        <View style={Styles.reviewContainer}>
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                        </View>
                    )
                case "3":
                    return (
                        <View style={Styles.reviewContainer}>
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                        </View>
                    )
                case "4":
                    return (
                        <View style={Styles.reviewContainer}>
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                        </View>
                    )
                case "5":
                    return (
                        <View style={Styles.reviewContainer}>
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                            <Icon type="Ionicons" style={Styles.star} name="star" />
                        </View>
                    )
            }
            
        }
        return (
            <View style={Styles.reviewContainer}>
                <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                <Icon type="Ionicons" style={Styles.star} name="star-outline" />
                <Icon type="Ionicons" style={Styles.star} name="star-outline" />
             </View>
        )
    }
    render() {
        const { book } = this.props
        return (
            <View style={Styles.container}>
                <View style={Styles.profileContainer}>
                <Image
                    style={Styles.avatar}
                    source={{ uri: book.volumeInfo.imageLinks.thumbnail}}
                />

                <View style={Styles.profileInfo}>
                    <Text style={Styles.name}>{book.volumeInfo.title}</Text>
                    <Text style={Styles.bio}>by {book.volumeInfo.authors[0]}</Text>
                    <View style={Styles.content}>
                        <Text style={Styles.price}>{this._renderPrice()}</Text>
                        {this._renderReviews()}
                    </View>
                    <View style={Styles.buttonContainer}>
                        <Text style={Styles.page}>{book.volumeInfo.pageCount} pages</Text>
                        <Button style={Styles.firstButton}>BUY</Button>
                        <Button style={Styles.secondButton} ><Icon type="Ionicons" style={Styles.icon} name="heart-empty" /></Button>
                    </View>
                </View>
                </View>
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
  )(SubHeader);
  