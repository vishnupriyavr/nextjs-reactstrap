import React from 'react';

import MainLayout from '../../layout/MainLayout';
//import ProfileContainer from '../../components/container/page/ProfileContainer';
import HomePage from '../../components/container/HomePage';
import HeadDefault from '../../layout/head/HeadDefault';

class Profile extends React.Component {
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
          title="Get Started | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <MainLayout activeLink="page.profile">
          <HomePage />
        </MainLayout>
      </>
    );
  }
}

export default Profile;
