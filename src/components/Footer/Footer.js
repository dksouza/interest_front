/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <div className="copyright">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
