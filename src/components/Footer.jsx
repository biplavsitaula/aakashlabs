import { footer } from "../assets/data/footer";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-body">{footer.body}</div>
        <div className="footer-email">{footer.email}</div>
        <div className="footer-main">{footer.main}</div>
      </div>
    </>
  );
};

export default Footer;
