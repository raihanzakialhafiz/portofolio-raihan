import { lazy, Suspense, useEffect, useRef, useState } from "react";

// Lanyard membawa three.js + rapier (~3 MB). Dimuat (dan di-download) hanya
// ketika kontainernya mendekati viewport, supaya load awal halaman tetap ringan.
const Lanyard = lazy(() => import("./Lanyard"));

export default function LanyardLazy(props) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full flex justify-center min-h-[300px]">
      {inView && (
        <Suspense fallback={<div className="w-full min-h-[300px]" aria-hidden="true" />}>
          <Lanyard {...props} />
        </Suspense>
      )}
    </div>
  );
}
