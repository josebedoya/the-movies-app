const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-inner'>The Movies App ©{year} | Jose Bedoya</div>
    </footer>
  );
};

export default Footer;
