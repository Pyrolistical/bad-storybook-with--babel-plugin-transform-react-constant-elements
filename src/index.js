import React from 'react';

import Imported from './imported';

export default () => {
  return <Container>
    <Imported/>
  </Container>;
};


const Container = ({children}) => {
  return <div>{children}</div>
}