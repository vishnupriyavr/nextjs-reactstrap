import React from 'react';
import { connect } from 'react-redux';

import MainLayout from '../../layout/MainLayout';
import DashboardContainer from '../../components/container/dashboard/DashboardContainer';
import HeadDefault from '../../layout/head/HeadDefault';

class Dashboard extends React.Component {
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
          title="Metrics | Proven Solution NLP Engine"
          description="Proven Solution NLP Engine"
        />
        <MainLayout
          dispatch={dispatch}
          storeLayout={storeLayout}
          activeLink="dashboard"
        >
          <DashboardContainer dispatch={dispatch} storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default connect(state => state)(Dashboard);