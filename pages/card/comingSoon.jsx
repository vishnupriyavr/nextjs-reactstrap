import React from 'react';

import MainLayout from '../../layout/MainLayout';
import PostsContainer from '../../components/container/card/PostsContainer';
import HeadDefault from '../../layout/head/HeadDefault';

class Posts extends React.Component {
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
          title="Coming Soon | Proven Solution NLP Engine"
          description="Proven Solution NLP Engine."
        />
        <MainLayout
          dispatch={dispatch}
          storeLayout={storeLayout}
          activeLink="cards"
        >
          <PostsContainer dispatch={dispatch} storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default Posts;
