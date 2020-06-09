import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {SvgCssUri} from 'react-native-svg';

interface HeaderProps {}

const HeaderComponent = styled(SafeAreaView)`
  background-color: #000000;
  height: 11%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderComponent>
      <SvgCssUri
        uri="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
        width="160px"
        height="60px"
      />
    </HeaderComponent>
  );
};

export default Header;
