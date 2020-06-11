import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const ExLink = ({ href, children }: Props) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);
