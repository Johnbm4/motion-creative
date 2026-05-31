import { ReactLenis } from 'lenis/react';
import { memo, useEffect, useState, type ReactNode } from 'react';

function getLenisOptions(isLowEnd: boolean) {
  return {
    lerp: isLowEnd ? 0.09 : 0.06,
    duration: isLowEnd ? 1.2 : 1.6,
    smoothWheel: true,
    wheelMultiplier: isLowEnd ? 0.65 : 0.75,
    touchMultiplier: isLowEnd ? 1 : 1.15,
    syncTouch: false,
  };
}

function SmoothScroll({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState(() => getLenisOptions(false));

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const lowCores = (navigator.hardwareConcurrency ?? 8) <= 4;
    setOptions(getLenisOptions(coarse && lowCores));
  }, []);

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}

export default memo(SmoothScroll);
