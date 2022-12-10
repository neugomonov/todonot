import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import "../index.css";
import "../style.ts";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    );
  }
}
