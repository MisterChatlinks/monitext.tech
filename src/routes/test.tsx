import { SnackTest } from "#islands/TestIsland/SnackBar.tsx";
import { FreshContext, type Handlers } from "$fresh/server.ts";
import LoginFormIsland from "#islands/Components/LoginForm/index.tsx";
import RegistrationFormIsland from "#islands/Components/RegisterForm/index.tsx";

export const handler: Handlers = {
  GET(req, ctx: FreshContext) {
    if (Deno.env.get("FRESH_ENV") === "production") {
      return ctx.renderNotFound()
    }

    return ctx.render({
      title: "Test Page",
      description: "This is a test page.",
      url: req.url,
      isTest: true,
    });
  }
}

export default function Test() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold mb-4">Test Page</h1>
        <p class="text-lg mb-6">This is a test page.</p>
        <SnackTest />
      </div>
      <hr />
      <h2> Test Login Island </h2>
      <LoginFormIsland />
      <hr />
      <h2> Test Registration Island </h2>
      <RegistrationFormIsland />
    </div>
  );
}