import "./footer.scss"

const Footer = () => {
  return (
    <footer className="flex center between gap-15">
      <div className="left">
        <ul  className="flex gap-15 center">
          <li>About</li>
          <li>Projects</li>
          <li>Speaking</li>
          <li>Uses</li>
        </ul>
      </div>
      <div className="right">
        <h4>© 2023 Spencer Sharp. All rights reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;
