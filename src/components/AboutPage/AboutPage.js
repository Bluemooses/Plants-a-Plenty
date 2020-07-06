import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <h2>getPlanty</h2>
      <p>
        getPlanty was created to bring knowledge and resources to individuals who have land, desire, and will to grow their own food.  Let getPlanty help you create a garden bed and begin your journey to self sufficiency
      </p>
    </div>
  </div>
);

export default AboutPage;
