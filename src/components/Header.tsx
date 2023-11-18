import todoLogo from '../assets/todolist-logo.svg';

export function Header() {
  return (
    <header className="bg-gray-700 flex justify-center h-48 p-16">
      <a className="shadow-none" href="/">
        <img className="h-14" src={todoLogo} alt="logo todo" />
      </a>
      <div className="text-red-800"></div>
    </header>
  );
}

export default Header;
