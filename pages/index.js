import dynamic from "next/dynamic";

const ArcanaTerminal = dynamic(() => import("../components/ArcanaTerminal"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <ArcanaTerminal />
    </main>
  );
}
