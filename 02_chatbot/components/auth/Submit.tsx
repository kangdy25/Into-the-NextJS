import { Button } from "../ui/button";

const Submit = ({ isPending, children, ...others }: any) => {
  return (
    <Button type="submit" disabled={isPending} {...others}>
      {children}
    </Button>
  );
};

export default Submit;
