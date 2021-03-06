import React, { useEffect } from 'react';
import PollDetail from './PollDetail';
import { useSelector, useDispatch } from 'react-redux';
import { useCurrentUser } from '../../../../hooks/authHooks';
import { selectPolls } from '../../../../selectors/businessSelectors';
import { setBusinessPolls } from '../../../../actions/businessActions';
import styles from './AllPolls.css';

const AllPolls = () => {
  const user = useCurrentUser();
  const polls = useSelector(selectPolls);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user) dispatch(setBusinessPolls(user.restaurant[0]._id));
  }, [user]);

  const pollsToList = polls.map(poll => (
    <li key={poll._id} className={styles.PollsItem}>
      <PollDetail key={poll._id} {...poll} />
    </li>
  ));

  return (
    <div className={styles.AllPolls}>
      <h2>All Polls</h2>
      <ul className={styles.PollsList}>
        {pollsToList}
      </ul>
    </div>
  );
};

export default AllPolls;
