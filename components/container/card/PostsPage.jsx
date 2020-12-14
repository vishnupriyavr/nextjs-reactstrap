import React, { memo } from 'react';
import { CARDS } from '../../../constants/cards';
import {
  PostCard,
  ProfileCard,
  MenuCard,
  MenuCardDiscount,
} from '../../../components/card';

const PostsPage = memo(props => {
  return (
    <>
      &nbsp;&nbsp;
      <h3>Coming Soon</h3>
      &nbsp;&nbsp;
      <div className="hero">
        <ProfileCard items={CARDS.posts} />
      </div>
    </>
  );
});

export default PostsPage;
