import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

interface Props {
  renderContent: (value: number) => JSX.Element;
}

const DELAY = 100;

export default function ScrolledSpy({ renderContent }: Props) {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, DELAY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return renderContent(scrollY);
}
