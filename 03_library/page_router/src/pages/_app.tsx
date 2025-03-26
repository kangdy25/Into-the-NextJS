import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
  };

  // 프로그래메틱하게 작성된 라우팅 방식을 프리페칭하는 방법
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href={"/"}>Index</Link>
        &nbsp;
        {/* Link 컴포넌트의 프리페칭을 강제적으로 해제하는 방법 */}
        <Link href={"/search"} prefetch={false}>
          Search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>Book/1</Link>
        <div>
          <button onClick={onClickButton}>test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />;
    </>
  );
}
