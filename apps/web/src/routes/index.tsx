import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

function HomeComponent() {
  const { data: session, isPending } = authClient.useSession();
  const isAuthenticated = !isPending && !!session;

  return (
    <main className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate z-[2] hidden opacity-50 contain-strict lg:block"
      >
        <div className="-translate-y-[350px] -rotate-45 absolute top-0 left-0 h-[80rem] w-[35rem] rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="-rotate-45 absolute top-0 left-0 h-[80rem] w-56 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="-translate-y-[350px] -rotate-45 absolute top-0 left-0 h-[80rem] w-56 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-24 md:pt-36">
          <div
            aria-hidden
            className="-z-10 absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
          />
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  to="/"
                  className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-background p-1 pl-4 shadow-black/5 shadow-md transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
                >
                  <span className="text-foreground text-sm">
                    Now Supporting Seamless File Uploads
                  </span>
                  <span className="block h-4 w-0.5 border-l bg-white dark:border-muted dark:bg-zinc-700" />

                  <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
                    <div className="-translate-x-1/2 flex w-12 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>

                <h1 className="mx-auto mt-8 max-w-4xl text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                  Effortless File Uploads for Modern Web Apps
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                  A fast, intuitive, and secure way to let users upload, manage,
                  and share files—fully customizable to match your app’s style
                  and needs.
                </p>
              </AnimatedGroup>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                <div key={1}>
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link to="/">
                      <span className="text-nowrap">Start Upload</span>
                    </Link>
                  </Button>
                </div>
                {!isAuthenticated && (
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 px-5"
                  >
                    <Link to="/">
                      <span className="text-nowrap">Sign In</span>
                    </Link>
                  </Button>
                )}
              </AnimatedGroup>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
