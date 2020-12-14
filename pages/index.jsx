import React from 'react';
import { connect } from 'react-redux';

import MainLayout from '../layout/MainLayout';
//import HomeContainer from '../components/container/HomeContainer';
import ProfilePage from '../components/container/page/ProfilePage';
import HeadDefault from '../layout/head/HeadDefault';

class Index extends React.Component {
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
          title="Home | Proven Solution NLP Engine"
          description="Proven Solution NLP Engine"
        />
        <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
          <ProfilePage />
        </MainLayout>
      </>
    );
  }
}

export default connect(state => state)(Index);
