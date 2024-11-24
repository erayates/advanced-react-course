import React from "react";

export const UncontrolledForm = () => {
  const nameInputRef = React.createRef();
  const emailInputRef = React.createRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(emailInputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input
        name="email"
        type="email"
        placeholder="Email"
        ref={emailInputRef}
      />
    </form>
  );
};
