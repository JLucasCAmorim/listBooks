import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ListView, Image, RefreshControl } from 'react-native';

import BooksActions from "../../store/ducks/books";
import { ItemView, Styles, TouchableOpacity  } from './styles';

class BookList extends Component {
  
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = (size = 0) => {
    this.props.addBookRequest(size);
  }

  reloadBooks = (size = 0) => {
    this.props.reloadBooksRequest(size);
  }
 
  _navigateDetail = (book) => {
    this.props.getBook(book);
    this.props.navigation.navigate("Details");
  }

  renderItem (book) {
    if (book.volumeInfo.hasOwnProperty('imageLinks')) {
    return (
      <ItemView>
        <TouchableOpacity onPress={() => this._navigateDetail(book)}>
        <Image source={{ uri: book.volumeInfo.imageLinks.thumbnail}} style={Styles.image} />
        </TouchableOpacity>
      </ItemView>
    );
    } else {
      return (
        <ItemView>
          <Image source={require('../../images/no-image.png')} style={Styles.image} />
        </ItemView>
      );
    }
  }
  // Criar campo realoding para resetar o array
  _onRefresh = () => {
    if(!this.props.reloading){
      this.reloadBooks();
    }
  }
  
  
  onEndReached = () => {
    if(!this.props.loading && (this.props.total -  this.props.dataItems.length > 0)){
      const size = parseInt(this.props.dataItems.length) - 1;
      this.loadBooks(size);
    }
  }

  render(){
    return (
        <ListView
          refreshControl={
            <RefreshControl
            refreshing={this.props.reloading}
            onRefresh={() => this._onRefresh()}
          />
          }
          contentContainerStyle={Styles.contentList}
          dataSource={this.props.dataSource}
          renderRow={this.renderRow.bind(this)}
          onEndReached={() => this.onEndReached()}
          onEndReachedThreshold={0.3}
          enableEmptySections
        />
    );
  }
  renderRow (book) {
    return (
      this.renderItem(book)
    )
  }

}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

const mapStateToProps = ({ books }) => {
  const { data, reloading, total, filteredBooks } = books;
  let dataItems;
  if (filteredBooks.length > 0) {
    dataItems = filteredBooks
  } else {
    dataItems = data
  }
  return {
    dataItems,
    dataSource: dataSource.cloneWithRows(dataItems),
    reloading,
    total
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
