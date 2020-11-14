import React, { useEffect } from 'react';

const User = React.memo(function ({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : '',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      ({user.email})<button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return users.map((user, index) => (
    <User user={user} key={index} onRemove={onRemove} onToggle={onToggle} />
  ));
}

export default React.memo(UserList);
