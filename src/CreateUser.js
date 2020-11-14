import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  // useEffect(() => {
  //   console.log('값이 설정됨');
  //   console.log(username, email);
  //   return () => {
  //     console.log('바뀌기 전..');
  //     console.log(username, email);
  //   };
  // }, [username, email]);
  return (
    <>
      <input
        name="username"
        placeholder="유저네임"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="유저네임"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </>
  );
}

export default React.memo(CreateUser);
