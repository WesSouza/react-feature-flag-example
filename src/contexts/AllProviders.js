import React from 'react';

import Apollo from 'contexts/Apollo';
import Breakpoint from 'contexts/Breakpoint';

const AllProviders = ({
  children,
}) => (
  <Apollo>
    <Breakpoint.Provider>
      {children}
    </Breakpoint.Provider>
  </Apollo>
);

export default AllProviders;
