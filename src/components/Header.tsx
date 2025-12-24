import './Layout.css';

interface HeaderProps {
  title?: string;
}

export function Header({ title = 'Dashboard' }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>{title}</h1>
      </div>
      <div className="header-user">
        <div className="user-avatar">MK</div>
        <span>Master Kim</span>
      </div>
    </header>
  );
}
