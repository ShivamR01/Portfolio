import React, { useEffect, useRef, useState, PropsWithChildren } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const VantaBackground: React.FC<PropsWithChildren> = ({ children }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });

    const loadVanta = async () => {
      try {
        if (!window.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');
        }

        if (!window.VANTA?.NET) {
          await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
        }

        if (window.VANTA?.NET && vantaRef.current && !vantaEffect) {
          const effect = window.VANTA.NET({
            el: vantaRef.current,
            color: 0x5e60ce,
            backgroundColor: 0x0d1117,
            maxDistance: 40.0,
            spacing: 32.0,
            points: 8.0,
            showDots: true,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 3.0,
            gyroControls: false,
          });
          setVantaEffect(effect);
        }
      } catch (err) {
        console.error('Vanta load error:', err);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative min-h-screen w-full overflow-hidden bg-[#0d1117]">
      <div className="absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VantaBackground;
