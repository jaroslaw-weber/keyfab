import { LoginButton } from "./LoginButton";

export default function Navbar() {
  return (
    <div className="navbar px-6">
      <div className="flex-1">
        <a className="normal-case text-xl pr-12">keyfab</a>
        <a className=" normal-case text-sm">keyboard layout design made easy</a>
      </div>
      <div className="flex-none">
        <LoginButton />
      </div>
    </div>
  );
}
