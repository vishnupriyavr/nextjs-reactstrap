import React from 'react';

import MainLayout from '../../layout/MainLayout';
import ButtonsContainer from '../../components/container/form/ButtonsContainer';
import HeadDefault from '../../layout/head/HeadDefault';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  static async getInitialProps(props) {
    const { store, isServer, req, res } = props.ctx;
  }

  render() {
    const { dispatch, storeLayout } = this.props;
    return (
      <>
        <HeadDefault
          title="Bring Your Own Data | Proven Solution NLP Engine"
          description="Proven Solution NLP Engine."
        />
        <MainLayout
          dispatch={dispatch}
          storeLayout={storeLayout}
          activeLink="buttons"
        >
          <ButtonsContainer />
        </MainLayout>
      </>
    );
  }
}

export default Buttons;
