import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addBookRequest: ["size"],
  getBooksSuccess: ["books"],
  reloadBooksRequest: ["size"],
  reloadBooksSuccess: ["books"],
  callSearch: [],
  filterBook: ["bookName"],
  getBook: ["book"]
});

export const BooksTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  filteredBooks: [],
  loading: false,
  total: '',
  reloading: false,
  search: false,
  book: ''
});

/* Reducers */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_BOOK_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_BOOKS_SUCCESS]: (state, { books }) => {
    let newData = [...state.data, ...books.items];
    return state.merge({ data: newData, loading: false, total: books.totalItems})
  },
  [Types.RELOAD_BOOKS_REQUEST]: state => state.merge({ reloading: true }),
  [Types.RELOAD_BOOKS_SUCCESS]: (state, { books }) => {
    let newData = books.items;
    return state.merge({ data: newData, reloading: false, total: books.totalItems})
  },
  [Types.CALL_SEARCH]: state => state.merge({ search: !state.search, filteredBooks: [] }),
  [Types.FILTER_BOOK]: (state, { bookName }) => {
    let newData = state.data.filter(function (item) {
      const itemData = item.volumeInfo.title;
  
      const textData = bookName;
  
      return itemData.indexOf(textData) > -1
    })
    return state.merge({ filteredBooks: newData })
  },
  [Types.GET_BOOK]: (state, { book }) => state.merge({ book })
});
