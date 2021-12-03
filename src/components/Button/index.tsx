import { ButtonComponent } from './styles';

type button = {
  text: string;
  click: Function;
};

const Button = ({ text, click }: button) => {
  //TODO: Actions should happen here
  return (
    <>
      <ButtonComponent onClick={() => click()}>{text}</ButtonComponent>
    </>
  );
};

export default Button;
