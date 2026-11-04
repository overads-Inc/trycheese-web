import { STORES } from "@/lib/site";

// Apple's and Google's official badge artwork (public/badges), unmodified, as
// their guidelines ask. The Google Play PNG carries its own clear space, so it
// is drawn larger and pulled in with negative margins to sit level with Apple's.

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="Download trycheese">
      <li>
        <a href={STORES.appStore} target="_blank" rel="noopener" className="block transition-transform duration-200 hover:-translate-y-0.5">
          {/* eslint-disable-next-line @next/next/no-img-element -- official SVG badge, shown as is */}
          <img src="/badges/app-store.svg" alt="Download on the App Store" width={156} height={52} className="h-[52px] w-auto" />
        </a>
      </li>
      <li>
        <a href={STORES.googlePlay} target="_blank" rel="noopener" className="block transition-transform duration-200 hover:-translate-y-0.5">
          {/* eslint-disable-next-line @next/next/no-img-element -- official PNG badge, shown as is */}
          <img src="/badges/google-play.png" alt="Get it on Google Play" width={201} height={78} className="-mx-[10px] -my-[13px] h-[78px] w-auto" />
        </a>
      </li>
    </ul>
  );
}
