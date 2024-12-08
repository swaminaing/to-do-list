import { type ReactNode } from "react";

interface HeadersProps{
    image: {
        src: string;
        alt: string;
    };

    children: ReactNode;
}

const Headers = ({image, children}: HeadersProps) => {
  return (
    <header>
        <img {...image} />
        {children}
    </header>
  )
}

export default Headers