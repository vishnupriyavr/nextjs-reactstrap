import React from 'react';

import MainLayout from '../../layout/MainLayout';
import ChatContainer from '../../components/container/chat/ChatContainer';
import HeadDefault from '../../layout/head/HeadDefault';

class InteractiveChat extends React.Component {
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
          title="Interactive Chat | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <MainLayout activeLink="interactivechat">
          <ChatContainer />
        </MainLayout>
      </>
    );
  }
}

export default InteractiveChat;
