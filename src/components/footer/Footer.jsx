import "./footer.css";
import FooterItem from "../FooterItem";

const Footer = () => {
  return (
    <footer>
      <FooterItem content="Footer" isLowersetext={false} />
      <div className="footer">
        <FooterItem content="First" isLowersetext={false} />
        <FooterItem content="Second" isLowersetext={false} />
        <FooterItem content="Third" isLowersetext={false} />
        <FooterItem content="Fourth" isLowersetext={false} />
      </div>
    </footer>
  );
};

export default Footer;
