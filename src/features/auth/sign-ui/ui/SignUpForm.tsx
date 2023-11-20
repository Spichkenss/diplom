import { SignUpAction } from "../model/actions";

export const SignUpForm = () => {
  return (
    <form action={SignUpAction} className="flex flex-col gap-4">
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="password" placeholder="password" />
      <button type="submit">submit</button>
    </form>
  );
};
