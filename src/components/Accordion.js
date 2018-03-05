import React, { Fragment } from 'react';

import Component from '@reactions/component';

const Accordion = ({
  children,
  label,
}) => (
  <Component initialState={{ isOpen: false }}>
    {({ setState, state }) => (
      <Fragment>
        <button
          type='button'
          onClick={() => setState({ isOpen: !state.isOpen })}
        >
          {label}
        </button>
        {state.isOpen &&
          <div>
            {children}
          </div>
        }
      </Fragment>
    )}
  </Component>
);

export default Accordion;
