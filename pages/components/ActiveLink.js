import React from "react";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const style = {
    fontWeight: 900,
    color: router.asPath === href ? "brown" : "black",
  }

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink;
