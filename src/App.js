import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './userList';
import CreateUser from './CreateUser';

function countUsers(users, cond) {
  console.log('처리중');
  return users.filter(cond).length;
}

function App() {
  // 1. 입력폼 관련 처리
  // 입력폼에서 state를 사용하기 위해 초기화
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs; // 상태값을 변수로 저장
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target; //이벤트가 일어난 타겟 DOM에서 name, value 프로퍼티를 읽어 같은 이름의 변수에 저장
      setInputs({
        ...inputs, // 이전 inputs 객체를 복사하고 (이걸 안하면 다른 칸에 값이 입력되면 옆의 칸의 정보가 지워진다)
        [name]: value, // 키는 name, 값은 value로 저장
      });
    },
    [inputs],
  );

  // 2. 유저 정보 관련 처리
  // users의 상태값 초기화
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'John',
      email: 'john@apple.com',
      active: true,
    },
    {
      id: 2,
      username: 'Tom',
      email: 'tom@apple.com',
      active: false,
    },
    {
      id: 3,
      username: 'Jack',
      email: 'jack@apple.com',
      active: false,
    },
  ]);

  const nextId = useRef(users.length + 1); //
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [users, username, email]);
  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users],
  );
  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user,
        ),
      );
    },
    [users],
  );
  // const userCount = countUsers(users, (user) => user.active);
  const userCount = useMemo(() => countUsers(users, (user) => user.active), [
    users,
  ]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {userCount}</div>
    </>
  );
}

export default App;
