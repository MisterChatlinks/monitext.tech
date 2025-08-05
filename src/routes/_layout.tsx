import HeaderIsland from "#islands/Components/Header/index.tsx";
import { PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import { FooterComponent } from "#components/statics/footer/index.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div className="max-w-full max-h-full flex flex-col">
      <div className="min-h-max">
        <HeaderIsland view="v3" />
      </div>
      <div className="flex-auto p-8 overflow-auto">
        <Partial name="main-content">
          <Component />
        </Partial>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </div>
  );
}