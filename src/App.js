import React from 'react';

import Accordion from 'components/Accordion';
import Feature from 'components/Feature';

import SystemFeatures from 'constants/SystemFeatures';

import AllProviders from 'contexts/AllProviders';
import Breakpoint from 'contexts/Breakpoint';

const App = () => (
  <AllProviders>
    <section>
      <h1>State</h1>
      <Accordion label='Open'>
        Lorem ipsum dolor bla bla bla.
      </Accordion>

      <h1>Context</h1>
      <Breakpoint.Consumer>
        {(breakpoint) => (
          <div>
            The current breakpoint is {breakpoint}
          </div>
        )}
      </Breakpoint.Consumer>

      <h1>Feature Toggle</h1>
      <Feature
        feature={SystemFeatures.version2}
        renderWhenEnabled={
          <div>
            Feature version2 is enabled.
          </div>
        }
        renderWhenDisabled={
          <div>
            Feature version2 is disabled.
          </div>
        }
      />
    </section>
  </AllProviders>
);

export default App;
