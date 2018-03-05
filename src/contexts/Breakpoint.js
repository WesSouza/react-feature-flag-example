import createReactContext from 'create-react-context';
import React from 'react';
import Component from '@reactions/component';

import BreakpointObserver from 'lib/BreakpointObserver';

const BreakpointContext = createReactContext(null);

const Provider = ({
  children,
}) => {
  const breakpointObserver = BreakpointObserver.getSharedInstance();

  return (
    <Component
      initialState={{ breakpoint: breakpointObserver.getCurrentBreakpoint() }}
      didMount={({ setState }) => {
        breakpointObserver.subscribe('BreakpointContext', (breakpoint) => {
          setState({
            breakpoint,
          });
        });
      }}
      willUnmount={() => {
        breakpointObserver.unsubscribe('BreakpointContext');
      }}
    >
      {({ state }) => (
        <BreakpointContext.Provider value={state.breakpoint}>
          {children}
        </BreakpointContext.Provider>
      )}
    </Component>
  );
};

export default {
  Consumer: BreakpointContext.Consumer,
  Provider,
};
