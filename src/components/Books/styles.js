import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
flex: 1;
`;

export const TouchableOpacity = styled.TouchableOpacity`
`;

export const ItemView = styled.View`
margin: 9px;
width: 100px;

`;

export const Styles = StyleSheet.create({
  contentList: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    width: 100,
    height: 150
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
});