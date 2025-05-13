
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            SemAtravessador
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/como-funciona">Como funciona</NavLink>
          <NavLink href="/carros-disponiveis">Carros disponíveis</NavLink>
          <NavLink href="/precos">Preços</NavLink>
          <NavLink href="/faq">Perguntas frequentes</NavLink>
          <NavLink href="/sobre">Sobre Nós</NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/entrar" className="text-gray-700 hover:text-blue-600 font-medium">
            Entrar
          </Link>
          <Link to="/criar-conta" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-colors">
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink = ({ href, className, children }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "text-gray-700 hover:text-blue-600 font-medium transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
