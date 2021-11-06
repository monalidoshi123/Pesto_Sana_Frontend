import { Button } from "@material-ui/core";

export default function ButtonComponent(props) {
  return (
    <Button
      color={props.color ? props.color : "inherit"}
      key={props.text}
      onClick={props.handleClick}
      component={props.component}
      to={props.to}
    >
      {props.text}
    </Button>
  );
}
