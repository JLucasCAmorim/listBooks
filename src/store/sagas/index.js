import { all, takeLatest } from "redux-saga/effects";

import { BooksTypes } from "../ducks/books";
import { moreBooks, reloadBooks } from "./books";

export default function* rootSaga() {
  yield all([
    takeLatest(BooksTypes.ADD_BOOK_REQUEST, moreBooks),
    takeLatest(BooksTypes.RELOAD_BOOKS_REQUEST, reloadBooks),
  ]);
}
