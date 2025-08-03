import HeaderIsland from "#islands/Components/Header/index.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      <div>
        <HeaderIsland view="v2" />
      </div>
      <div>
        <Component/>
      </div>
    </div>
  );
}