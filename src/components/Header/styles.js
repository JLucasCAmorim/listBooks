import styled from 'styled-components';
import {StyleSheet} from 'react-native';


export const Container = styled.View`
`;

export const Line = styled.View`
    border-bottom-color: rgba(0,0,0,0.1);			
    align-self: center;
    border-bottom-width: 1;
    width: 128px;
    margin-top: -20px;
`;

export const Styles = StyleSheet.create({
  header: {
    marginBottom: 20
  },
  title: {
    fontWeight: "normal"
  },
  icon: {
    fontSize: 30,
    fontWeight: 'normal',
    color: '#000'
  },
  input: {
    backgroundColor: '#FEE034',
    borderColor: '#FEE034',
  },
  text: {
    color: '#000'
  }
});