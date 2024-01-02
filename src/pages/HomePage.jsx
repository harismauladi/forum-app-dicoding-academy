// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from '../layouts/CardContainer';
import HotIssueContainer from '../layouts/HotIssueContainer';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { setCategoryActionCreator } from '../states/categorys/action';
import { extractCategory } from '../utils';

function HomePage() {
  const {
    threads = [],
    users = [],
    category = '',
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  const categoryList = extractCategory(threads);

  const onChangeCategory = (setCategory) => {
    dispatch(setCategoryActionCreator(setCategory));
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const filterThread = threads.filter(
    (thread) => thread.category === category || category === '',
  );

  const threadList = filterThread.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="overflow-x-hidden">
      <HotIssueContainer
        categoryChangeHandler={onChangeCategory}
        categories={categoryList}
        currentCategory={category}
      />
      <CardContainer threadList={threadList} />
    </section>
  );
}

export default HomePage;
