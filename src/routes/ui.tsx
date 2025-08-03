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

