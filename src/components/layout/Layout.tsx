import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main">
        <div className="container">{children}</div>
      </main>
      <footer className="app-footer">
        <div className="container">
          <p>Made by yavuz c. via ❤️ © {new Date().getFullYear()} Movie Explorer</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;