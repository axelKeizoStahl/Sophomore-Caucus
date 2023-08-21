import logo from '../logo.png';
import './footer.css';
import Image from 'next/image'

export function Footer()  {
  return (
    <footer className="footer">
      <div className="logo">
        <Image src={logo} />
      </div>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
  );
};
