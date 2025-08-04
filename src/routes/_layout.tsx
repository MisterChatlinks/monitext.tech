import HeaderIsland from "#islands/Components/Header/index.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div className="max-w-full max-h-full flex flex-col">
      <div className="min-h-max">
        <HeaderIsland view="v3" />
      </div>
      <div className="flex-auto p-8">
        <Component/>
      </div>
    </div>
  );
}