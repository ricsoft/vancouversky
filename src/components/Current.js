import React from 'react';
import Simple from './layouts/Simple';

const Current = ({CurrentData}) => {
  return (
    <Simple
      icon={CurrentData.icon}
      temperature={CurrentData.temperature}
      condition={CurrentData.condition}
    />
  );
};

export default Current;
