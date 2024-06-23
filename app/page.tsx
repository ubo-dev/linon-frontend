import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "green" })}>your business&nbsp;</h1>
        <br />
        <h1 className={title()}>reacheable from all over the world.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Easy to use, fast and modern platform for producers all around the
          world.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
            className: "text-white",
          })}
          href={siteConfig.navMenuItems[0].href}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
