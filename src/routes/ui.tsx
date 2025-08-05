import { FreshContext, type Handlers } from "$fresh/server.ts";

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

export default function ui() {
  return (
  <div class="max-w-4xl mx-auto space-y-12">     <div class="p-8 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
      <h2 class="text-xl font-semibold mb-2">Simple Container</h2>
      <p class="text-sm text-text-soft dark:text-text-soft mb-4">
        This is a clean, simple card with a subtle border and background, following the established color palette. It is perfect for displaying content without distractions.
      </p>
      <a href="#" class="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2">
        Learn More
      </a>
    </div>

    <div class="p-8 rounded-xl border border-surface-glass-200 dark:border-surface-glass-100 bg-surface-glass-100 dark:bg-surface-glass-50 glass-container shadow-lg">
      <h2 class="text-xl font-semibold mb-2">Glassmorphism Container</h2>
      <p class="text-sm text-text-soft dark:text-text-soft mb-4">
        A modern, semi-transparent container that blurs the background. It provides a sleek, layered look while still allowing the page's background to be visible.
      </p>
      <a href="#" class="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2">
        See Demos
      </a>
    </div>
    
    <div class="p-8 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-2xl">
      <h2 class="text-xl font-semibold mb-2">Opaque Container</h2>
      <p class="text-sm text-text-soft dark:text-text-soft mb-4">
        This container has a strong, solid background and a more pronounced shadow. It's ideal for components that need to stand out from the rest of the page.
      </p>
      <a href="#" class="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2">
        Get Started
      </a>
    </div>

    <div class="p-8 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
      <h2 class="text-xl font-semibold mb-4">Tabs Component</h2>
      
      <div class="tab-container">
        <input type="radio" name="tabs-radio" id="tab-radio-1" class="peer/tab1 hidden" checked/>
        <input type="radio" name="tabs-radio" id="tab-radio-2" class="peer/tab2 hidden"/>
        <input type="radio" name="tabs-radio" id="tab-radio-3" class="peer/tab3 hidden"/>
      
        <div class="flex space-x-2 border-b border-border-light dark:border-border-dark pb-4">
          <label for="tab-radio-1" class="px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 border-b-2 border-transparent peer-checked/tab1:border-brand peer-checked/tab1:text-brand hover:bg-background-lighter dark:hover:bg-background-nightly">
            Overview
          </label>
          <label for="tab-radio-2" class="px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 border-b-2 border-transparent peer-checked/tab2:border-brand peer-checked/tab2:text-brand hover:bg-background-lighter dark:hover:bg-background-nightly">
            Settings
          </label>
          <label for="tab-radio-3" class="px-4 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 border-b-2 border-transparent peer-checked/tab3:border-brand peer-checked/tab3:text-brand hover:bg-background-lighter dark:hover:bg-background-nightly">
            Activity
          </label>
        </div>
      
        <div class="mt-4">
          <div id="tab-content-1" class="tab-content peer-checked/tab1:block hidden">
            <p class="text-sm text-text-soft dark:text-text-soft">
              This is the content for the Overview tab. It provides a summary of the key information.
            </p>
          </div>
          <div id="tab-content-2" class="tab-content peer-checked/tab2:block hidden">
            <p class="text-sm text-text-soft dark:text-text-soft">
              Here you can manage your settings. Customize your preferences and account details.
            </p>
          </div>
          <div id="tab-content-3" class="tab-content peer-checked/tab3:block hidden">
            <p class="text-sm text-text-soft dark:text-text-soft">
              This tab shows your recent activity and notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}