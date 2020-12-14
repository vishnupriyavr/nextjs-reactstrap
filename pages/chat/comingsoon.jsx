import React, { memo } from 'react';
import { CARDS } from '../../constants/cards';
import {
  PostCard,
  ProfileCard,
  MenuCard,
  MenuCardDiscount,
} from '../../components/card';

const PostsPage = memo(props => {
  return (
    <>
      <h1>Cards</h1>
      <div className="hero">
        <h3>Profile</h3>
        <ProfileCard items={CARDS.posts} />
      </div>
    </>
  );
});

export default PostsPage;
