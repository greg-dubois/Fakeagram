import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/Modal";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {HEADER} */}
      <Header />

      {/* {FEED} */}
      <Feed />

      {/* {MODAL} */}
      <Modal />
    </div>
  );
};

export default Home;
