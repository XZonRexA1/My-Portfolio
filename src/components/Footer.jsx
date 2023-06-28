const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mx-4 footer-center font-rubik my-8 ">
      <p>
        Copyright &copy; {currentYear} All rights reserved by
        <b className="text-orange-500">Alif Chowdhury Apurbo</b>
      </p>
    </footer>
  );
};

export default Footer;
