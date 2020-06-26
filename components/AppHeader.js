import React from 'react';
import {Header, Title, Left, Right, Body, Button, Icon} from 'native-base';

const AppHeader = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>Vancouver Sky</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="more" />
        </Button>
      </Right>
    </Header>
  );
};

export default AppHeader;
