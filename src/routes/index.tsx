import { Markdown } from "#components/dynamics/markdown-div/index.tsx";
import FAQIsland from "#islands/Components/FAQ/index.tsx";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 bg-background-light dark:bg-background-night text-text-dark dark:text-text-light font-satoshi transition-colors duration-500 ease-in-out">
      {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Prenstation */}
      <div className="flex flex-col md:flex-row  items-center justify-center min-h-max max-w-7xl mx-auto">
        {/* Left Section - Hero Text */}
        <section className="flex flex-col items-start flex-1 mb-12 md:mb-0 md:mr-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            <span className="block transition-colors duration-300">
              Focus on Your Code,
            </span>
            <span className="block transition-colors duration-300">
              Not Guessing Where it
            </span>
            <span className="text-brand font-extrabold transition-colors duration-300">
              Broke
            </span>
          </h1>
          <p className="mt-4 text-lg text-text-soft max-w-md transition-colors duration-300">
            Your logs. Enhanced, structured, and effortless to monitor. That's
            our job.
          </p>
          <a
            href="#"
            className="mt-8 px-6 py-3 bg-brand text-text-light font-bold rounded-lg shadow-lg hover:bg-brand-hover transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50"
          >
            Get Started
          </a>
        </section>

        {/* Vertical Divider & Code Section */}
        <div className="flex-shrink-0 flex items-center md:flex-row w-full md:w-auto mt-12 md:mt-0">
          {/* Divider */}
          <div className="hidden md:block w-px h-64 bg-border-accent rounded-full transition-all duration-500 ease-in-out" />

          {/* Code Sample Section */}
          <section className="flex-1 w-full md:ml-16 group relative">
            <div className="p-10 w-full bg-surface-glass-100 dark:bg-surface-glass-200 border-l-4 border-brand-hover rounded-xl shadow-2xl transition-all duration-500 ease-in-out group-hover:shadow-brand group-hover:border-accent-lighter">
              <Markdown>
                <code className="typescript block whitespace-pre-wrap font-mono text-xs md:text-sm text-text-dark dark:text-text-light">
                  {`import { createRuntime, getBuiltInWorkflow } from "@monitext/sdk"

const { createFormat, createConfig, policies } = getBuiltInWorkflow("default")

const format = createFormat({
  mode: "dev", // dev (human readable) | prod | json | yaml
  success: {
    showColumn: false,
    showStack: false,
  }
})

const config = createConfig({
  project: "YOUR_PUBLIC_PROJECT_ID",
  silence: []
})

const { monitext, mtxt } = createRuntime({ load: [policies], config, format })`}
                </code>
              </Markdown>
            </div>
            <div className="absolute inset-0 bg-brand-muted opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
          </section>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Runtime */}
      <div className="flex flex-col items-center py-12 px-6 bg-background-light dark:bg-background-night transition-colors duration-500 ease-in-out">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-text-dark dark:text-text-light">
            <span className="text-brand">We Support</span>{" "}
            <span className="text-text-soft">the following runtimes:</span>
          </h2>
          <p className="mt-2 text-text-soft">(More runtimes coming soon)</p>
        </div>

        {/* Runtimes Cards */}
        <ul className="flex flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
          {["Browser", "NodeJS", "Deno", "Bun", "ES2015+"].map((runtime) => (
            <li
              key={runtime}
              className="flex-shrink-0 min-w-[120px] p-4 text-center rounded-lg shadow-sm border border-border-light dark:border-border-dark bg-surface-glass-50 dark:bg-surface-glass-100 hover:bg-surface-glass-100 hover:dark:bg-surface-glass-200 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-lg font-semibold text-text-dark dark:text-text-light">
                {runtime}
              </span>
            </li>
          ))}
        </ul>

        <p className="py-8 text-text-soft">(Compatible With)</p>

        <ul className="flex flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
          {["ESM", "CommonJS", "Typescript"].map((runtime) => (
            <li
              key={runtime}
              className="badge-sm"
            >
              <span className="text-lg font-semibold text-text-dark dark:text-text-light">
                {runtime}
              </span>
            </li>
          ))}
        </ul>
        {/* NPM Button */}
        <a
          href="https://www.npmjs.com/package/@monitext/core" // Remplacez par le vrai lien
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 px-8 py-3 bg-brand text-text-light font-bold rounded-full shadow-lg hover:bg-brand-hover transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-brand-hover focus:ring-opacity-50"
        >
          See on npm
        </a>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* How It works */}
      <div className="flex flex-col items-center py-16 px-6 bg-background-lighter dark:bg-background-nightly transition-colors duration-500 ease-in-out">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark dark:text-text-light mb-16">
          How It Works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Step 1 */}
          <div className="group flex flex-col p-6 rounded-lg bg-surface-light dark:bg-surface-dark shadow-xl border border-border-light dark:border-border-neutral transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-extrabold text-brand mr-3">
                01
              </span>
              <h2 className="text-xl font-bold text-text-dark dark:text-text-light">
                Create a Project
              </h2>
            </div>
            <p className="text-text-soft">
              Head to your dashboard, create a new project, and copy your unique
              project ID.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group flex flex-col p-6 rounded-lg bg-surface-light dark:bg-surface-dark shadow-xl border border-border-light dark:border-border-neutral transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-extrabold text-brand mr-3">
                02
              </span>
              <h2 className="text-xl font-bold text-text-dark dark:text-text-light">
                Define Your Alert Policy
              </h2>
            </div>
            <p className="text-text-soft">
              Configure how you wish to be alerted—via email, SMS, or call. More
              options are on the way!
            </p>
          </div>

          {/* Step 3 */}
          <div className="group flex flex-col p-6 rounded-lg bg-surface-light dark:bg-surface-dark shadow-xl border border-border-light dark:border-border-neutral transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-extrabold text-brand mr-3">
                03
              </span>
              <h2 className="text-xl font-bold text-text-dark dark:text-text-light">
                Get Our SDK
              </h2>
            </div>
            <p className="text-text-soft">
              Install our package using your preferred manager:{" "}
              <code className="bg-surface-glass-100 px-2 py-0.5 rounded">
                npm
              </code>,
              <code className="bg-surface-glass-100 px-2 py-0.5 rounded ml-1">
                yarn
              </code>,
              <code className="bg-surface-glass-100 px-2 py-0.5 rounded ml-1">
                pnpm
              </code>, or
              <code className="bg-surface-glass-100 px-2 py-0.5 rounded ml-1">
                jsr
              </code>. Package name:{" "}
              <code className="text-brand">@monitext/sdk</code>
            </p>
          </div>

          {/* Step 4 */}
          <div className="group flex flex-col p-6 rounded-lg bg-surface-light dark:bg-surface-dark shadow-xl border border-border-light dark:border-border-neutral transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-extrabold text-brand mr-3">
                04
              </span>
              <h2 className="text-xl font-bold text-text-dark dark:text-text-light">
                Plug and Play
              </h2>
            </div>
            <p className="text-text-soft">
              Pass your project ID into the runtime and you're good to go! (It
              still works without the ID — but we won’t receive your precious
              logs to alert you in case of failure.)
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* How To Use */}
      <div className="flex flex-col items-center py-16 px-6 bg-background-light dark:bg-background-nightly font-satoshi transition-colors duration-500">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark dark:text-text-light mb-12">
          How to use
        </h1>

        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full max-w-7xl gap-12">
          {/* Configuration and Code */}
          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-text-dark dark:text-text-light">
              1. SDK Configuration
            </h2>
            <div className="relative group w-full">
              <div className="p-6 rounded-lg bg-surface-glass-50 dark:bg-surface-glass-100 border border-border-light dark:border-border-neutral shadow-lg transition-all duration-300 ease-in-out">
                <p className="text-text-soft text-sm mb-4">
                  Hover to view the full configuration
                </p>

                <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[400px] max-h-0">
                  <div className="pt-4 border-t border-border-light dark:border-border-dark">
                    <Markdown>
                      <code className="typescript block w-full text-text-dark dark:text-text-light bg-transparent font-mono whitespace-pre-wrap">
                        {`import { createRuntime, getBuiltInWorkflow } from "@monitext/sdk"

const { createFormat, createConfig, policies } = getBuiltInWorkflow("default")

const format = createFormat({
  mode: "dev", // dev (human readable) | prod | json | yaml
  success: {
    showColumn: false,
    showStack: false,
  }
})

const config = createConfig({
  project: "YOUR_PUBLIC_PROJECT_ID",
  silence: []
})`}
                      </code>
                    </Markdown>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-text-dark dark:text-text-light">
              2. Simple Logging
            </h2>
            <div className="p-6 pb-0 rounded-lg bg-surface-glass-50 dark:bg-surface-glass-100 border border-border-light dark:border-border-neutral shadow-lg">
              <Markdown>
                <code className="typescript block text-text-dark dark:text-text-light bg-transparent font-mono whitespace-pre-wrap">
                  {`const { monitext, mtxt } = createRuntime({ load: [policies], config, format })

monitext.info("Just a News, ", "Have a nice day")
.context({
  date:  Date.now()
})
.config({
  flags: ["nice-day"]
})

// Or the shorthand
mtxt.info("Just a News, Have a nice day", {
    context: {
      date:  Date.now()
    }
})`}
                </code>
              </Markdown>
            </div>
          </div>

          {/* Output Preview */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4 text-text-dark dark:text-text-light">
              3. Real-Time Output
            </h2>
            <div className="p-6 pb-0  rounded-lg bg-surface-glass-50 dark:bg-surface-glass-100 shadow-xl overflow-x-auto">
              <Markdown>
                <code className="bash block my-auto text-sm text-text-dark dark:text-text-light bg-transparent font-mono whitespace-pre">
                  {`🟦 [INFO] --------------------------------------------------------------------------------

Just a News, Have a nice day

📌 StackTraceInfo:

    • Caller:   <anonymous|top-level>
    • File:     /home/cat/.linksox/Projects/Mtxt/packages/monitext.ts/monitext.runtime.ts
    • Line:     21
    • Column:   10

   - date: 1754363012938

Bun, At 7/30/2025, 10:45:17 PM
───────────────────────────────────────────────────────────────────────────────────────────`}
                </code>
              </Markdown>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Log Levels */}
      <div className="flex flex-col items-center py-16 px-6 bg-background-light dark:bg-background-nightly font-satoshi transition-colors duration-500">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-dark dark:text-text-light mb-12 text-center">
          Log Levels & Features
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Standard Log Levels */}
          {[
            {
              title: "Debug",
              desc:
                "Lowest priority level — for things like function input/output tracking.",
              color: "text-text-soft border-text-soft",
            },
            {
              title: "Info",
              desc: "Common level. Think: a simple news or update.",
              color:
                "text-text-dark dark:text-text-light border-text-soft dark:border-text-light",
            },
            {
              title: "Success",
              desc:
                "A pleasant event — maybe your first paying user? Who knows.",
              color: "text-brand border-brand",
            },
            {
              title: "Failure",
              desc: "Something didn’t crash… but it definitely failed.",
              color: "text-red-400 border-red-400",
            },
            {
              title: "Warn",
              desc: "Something needs your attention — maybe soon.",
              color: "text-yellow-500 border-yellow-500",
            },
            {
              title: "Error",
              desc: "Something broke. Be worried.",
              color: "text-red-600 border-red-600",
            },
            {
              title: "Fatal",
              desc: "It’s over. The app is down. Panic mode.",
              color:
                "text-red-800 dark:text-red-300 border-red-800 dark:border-red-300",
            },
          ].map(({ title, desc, color }) => (
            <div
              key={title}
              className={`p-6 rounded-xl bg-surface-light dark:bg-surface-dark border-l-4 ${color} shadow-md`}
            >
              <h2 className={`text-2xl font-bold mb-2 ${color}`}>{title}</h2>
              <p className="text-text-soft">{desc}</p>
            </div>
          ))}

          {/* Advanced Features Section */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col items-center mt-10">
            <h2 className="text-3xl font-bold text-text-dark dark:text-text-light mb-8">
              Advanced Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* Guard */}
              <div className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark border-l-4 border-brand-hover shadow-md">
                <h3 className="text-2xl font-bold text-brand-hover mb-2">
                  Guard
                </h3>
                <p className="text-text-soft mb-4">
                  A simple wrapper — if the function fails, we alert you.
                </p>
                <div className="p-4 rounded-lg bg-background-nightly overflow-auto">
                  <code className="typescript block text-xs whitespace-pre-wrap font-mono text-text-light">
                    {`const mul = hooks.wrap({
  fn: function (a: number, b: number) {
    return a + b;
  },
})`}
                  </code>
                </div>
                <p className="text-xs text-text-soft mt-4">
                  Returns <code>ok</code> or <code>!ok</code>{" "}
                  with the result or error. Adds ~0.2–2ms overhead.
                </p>
              </div>

              {/* Profile */}
              <div className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark border-l-4 border-brand-hover shadow-md">
                <h3 className="text-2xl font-bold text-brand-hover mb-2">
                  Profile
                </h3>
                <p className="text-text-soft mb-4">
                  Wraps a function to benchmark its execution time in real time.
                  You’ll get a warning if a call exceeds the expected average
                  duration.
                </p>
                <div className="p-4 rounded-lg bg-background-nightly overflow-auto">
                  <code className="typescript block text-xs whitespace-pre-wrap font-mono text-text-light">
                    {`const { hooks } = createRuntime({...})
const sub = hooks.profile({
  fn: function (a: number, b: number) {
    return a - b;
  },
  options: {
    forAvgOf: 100,
    expectAvgDuration: 50,
    config: {
      flags: ["YOUR_FLAG"]
    }
  }
})`}
                  </code>
                </div>
                <p className="text-xs text-text-soft mt-4">
                  Returns <code>ok</code> or <code>!ok</code>{" "}
                  with the result or error. Adds ~0.3–4ms overhead.
                </p>
              </div>

              {/* Retrace */}
              <div className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark border-l-4 border-brand-hover shadow-md">
                <h3 className="text-2xl font-bold text-brand-hover mb-2">
                  Retrace
                </h3>
                <p className="text-text-soft mb-4">
                  A deep function observer. It rewrites the function body on the
                  fly to trace arguments, internal calls, and return values.
                </p>
                <div className="p-4 rounded-lg bg-background-nightly overflow-auto">
                  <code className="typescript block text-xs whitespace-pre-wrap font-mono text-text-light">
                    {`const { hooks } = createRuntime({...})
const r = Math.random()
const add = hooks.retrace({
  fn: function (a: number, b: number) {
    return a + b * r;
  },
  options: {
    dependencies: { r }
  }
})`}
                  </code>
                </div>
                <p className="text-xs text-text-soft mt-4">
                  Returns <code>ok</code> or <code>!ok</code>{" "}
                  with the result or error. Adds ~0.2–3ms overhead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Pricing */}
      <div className="flex flex-col items-center py-16 px-6 bg-background-lighter dark:bg-background-nightly font-satoshi transition-colors duration-500">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-dark dark:text-text-light mb-4 text-center">
          Available Plans (Pricing)
        </h1>
        <p className="text-lg text-text-soft mb-12 text-center max-w-2xl">
          Our tools are free to use — but running servers isn’t cheap. We offer
          flexible plans based on your needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Free Plan */}
          <div className="flex flex-col p-8 rounded-xl bg-surface-light dark:bg-surface-dark border-l-4 border-brand shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <h2 className="text-3xl font-bold text-text-dark dark:text-text-light mb-2">
              Free Plan
            </h2>
            <p className="text-brand font-semibold text-xl mb-6">
              Free
            </p>

            <ul className="space-y-4 text-text-soft flex-grow">
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  20,000
                </strong>{" "}
                logs per month
              </li>
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  7 days
                </strong>{" "}
                log retention
              </li>
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  3
                </strong>{" "}
                concurrent alert channels per project
              </li>
              <li className="relative group">
                <strong className="text-text-dark dark:text-text-light">
                  30
                </strong>{" "}
                Repo Analysis Tokens per month

                <span className="ml-2 text-xs text-text-soft cursor-pointer">
                  (What's this?)
                </span>

                {/* Tooltip */}
                <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 w-64 p-4 rounded-lg shadow-xl bg-surface-dark text-text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="font-semibold mb-2">
                    What is a Repo Analysis Token?
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Retrace error occurrences</li>
                    <li>Bottlenecks</li>
                    <li>Call graph tracing</li>
                    <li>Insecurities</li>
                    <li>File dependencies</li>
                  </ul>
                </div>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 block w-full text-center px-6 py-3 bg-brand text-text-light font-bold rounded-lg shadow-lg hover:bg-brand-hover transition-all duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>

          {/* Team Plan */}
          <div className="flex flex-col p-8 rounded-xl bg-surface-light dark:bg-surface-dark border-l-4 border-accent-lighter shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <h2 className="text-3xl font-bold text-text-dark dark:text-text-light mb-2">
              Team Plan
            </h2>
            <p className="text-accent-lighter font-semibold text-2xl mb-6">
              $20<span className="text-base text-text-soft">/month</span>
            </p>

            <ul className="space-y-4 text-text-soft flex-grow">
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  200,000
                </strong>{" "}
                logs per month
              </li>
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  30 days
                </strong>{" "}
                log retention
              </li>
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  15
                </strong>{" "}
                concurrent alert channels per project
              </li>

              <li className="relative group">
                <strong className="text-text-dark dark:text-text-light">
                  300
                </strong>{" "}
                Repo Analysis Tokens per month

                <span className="ml-2 text-xs text-text-soft cursor-pointer">
                  (What's this?)
                </span>

                {/* Tooltip */}
                <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 w-64 p-4 rounded-lg shadow-xl bg-surface-dark text-text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="font-semibold mb-2">
                    What is a Repo Analysis Token?
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Retrace error occurrences</li>
                    <li>Bottlenecks</li>
                    <li>Call graph tracing</li>
                    <li>Insecurities</li>
                    <li>File dependencies</li>
                  </ul>
                </div>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 block w-full text-center px-6 py-3 bg-accent-lighter text-text-light font-bold rounded-lg shadow-lg hover:bg-accent-darker transition-all duration-300 ease-in-out"
            >
              Start Your Plan
            </a>
            <span className="absolute top-2 right-2 text-xs px-2 py-1 bg-brand text-white rounded-full">
              Most Popular
            </span>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col p-8 rounded-xl bg-surface-light dark:bg-surface-dark border-l-4 border-gray-400 shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            <h2 className="text-3xl font-bold text-text-dark dark:text-text-light mb-2">
              Enterprise Plan
            </h2>
            <p className="text-gray-500 font-semibold text-2xl mb-6">
              $300<span className="text-base text-text-soft">/month</span>
            </p>

            <ul className="space-y-4 text-text-soft flex-grow">
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  800,000
                </strong>{" "}
                logs per month
              </li>
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  90 days
                </strong>{" "}
                log retention
              </li>
              <li>
                <strong className="text-text-dark dark:text-text-light">
                  Unlimited
                </strong>{" "}
                alert channels
              </li>
              <li className="relative group">
                <strong className="text-text-dark dark:text-text-light">
                  Unlimited
                </strong>{" "}
                Repo Analysis Tokens per month

                <span className="ml-2 text-xs text-text-soft cursor-pointer">
                  (What's this?)
                </span>

                {/* Tooltip */}
                <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 w-64 p-4 rounded-lg shadow-xl bg-surface-dark text-text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="font-semibold mb-2">
                    What is a Repo Analysis Token?
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Retrace error occurrences</li>
                    <li>Bottlenecks</li>
                    <li>Call graph tracing</li>
                    <li>Insecurities</li>
                    <li>File dependencies</li>
                  </ul>
                </div>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 block w-full text-center px-6 py-3 bg-gray-400 text-black font-bold rounded-lg shadow-lg hover:bg-gray-500 transition-all duration-300 ease-in-out"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* FAQ */}
      <div id="FAQ">
        <FAQIsland />
      </div>
    </main>
  );
}
