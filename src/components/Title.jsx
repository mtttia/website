import { Children } from "react";

export default function Title({children}) {
  return (
    <h1 className="text-primary">
      {children}
    </h1>
  )
}