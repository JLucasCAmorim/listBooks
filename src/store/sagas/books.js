import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import BooksActions from "../ducks/books";

const key = 'Put your key here';

export function* moreBooks(action) {
  const length = action.size;
  const response = yield call(api.get, `/volumes?q=harry pot:keyes&key=${key}&startIndex=${length}&maxResults=15`);
  
  yield put(BooksActions.getBooksSuccess(response.data));
  
}
export function* reloadBooks(action) {
  const length = action.size;
  const response = yield call(api.get, `/volumes?q=harry pot:keyes&key=${key}&startIndex=${length}&maxResults=15`);
  
  yield put(BooksActions.reloadBooksSuccess(response.data));
  
}