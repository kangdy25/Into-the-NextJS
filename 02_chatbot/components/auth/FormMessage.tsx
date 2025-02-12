import React from "react";

type Props = { message: string };

const FormMessage = ({ message }: Props) => {
  return <p className="text-sm text-red-600 ml-1 mt-1">{message}</p>;
};

export default FormMessage;
