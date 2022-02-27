import { useEffect, useState } from 'react';

import Button from './Button';
import logo from "./assets/logo.svg";
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export default function Header({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) {
  // Add shadow when page is scroll / no shadow when page is 
  // still at the top
  const [shadow, setShadow] = useState(false);

  // Add page scroll event listener to enable / disable shadow
  useEffect(() => {
    document.addEventListener("scroll", e => {
      const scroll = document.documentElement.scrollTop;
      if (!shadow && scroll > 30) setShadow(true);
      else if (shadow && scroll <= 30) setShadow(false);
    });
  }, [shadow]);

  return (
    <header className={`sticky top-0 ${shadow ? "shadow-lg backdrop-blur-sm bg-slate-100/40 dark:bg-slate-800/40" : ""}`}>
      <div className="wrapper">
        <img src={logo} alt="Line-up Logo" height={136 / 2.5} width={500 / 2.5} className="py-3 px-9 bg-slate-200 rounded-full" />
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="medium" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="medium" onClick={onLogin} label="Log in" />
              <Button primary size="medium" onClick={onCreateAccount} label="Sign up" />
            </>
          )}
          <Button type="theme" label="Sign up" />
        </div>
      </div>
    </header>
  );
}
