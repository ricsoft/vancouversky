import React from 'react';
import SimpleTemplate from './SimpleTemplate';

const Current = ({CurrentData}) => {
  return (
    <SimpleTemplate
      icon={CurrentData.icon}
      temperature={CurrentData.temperature}
      condition={CurrentData.condition}
    />
  );
};

export default Current;
