import { ButtonComponent } from './styles';

type button = {
  text: string;
};

const Button = ({ text }: button) => {
  //TODO: Actions should happen here
  return (
    <>
      <ButtonComponent>{text}</ButtonComponent>
    </>
  );
};

export default Button;
