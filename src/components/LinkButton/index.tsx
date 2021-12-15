import './styles.css';
import { Link } from 'react-router-dom';

type link = {
  text: string;
  to: string;
};

const LinkButton = ({ text, to }: link) => {
  return (
    <>
      <Link className="link-button" to={to}>
        {text}
      </Link>
    </>
  );
};

export default LinkButton;
