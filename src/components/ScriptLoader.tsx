import { useEffect } from 'react';

interface ScriptLoaderProps {
  src: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
  id?: string;
  onLoad?: () => void;
}

/**
 * Optimized script loader with proper caching and deferment
 */
export default function ScriptLoader({ 
  src, 
  strategy = 'afterInteractive',
  id,
  onLoad 
}: ScriptLoaderProps) {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    if (id) script.id = id;
    
    // Set appropriate loading strategy
    if (strategy === 'lazyOnload') {
      script.defer = true;
      script.async = false;
      
      // Load during idle time
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          document.head.appendChild(script);
          if (onLoad) onLoad();
        });
      } else {
        setTimeout(() => {
          document.head.appendChild(script);
          if (onLoad) onLoad();
        }, 2000);
      }
    } else if (strategy === 'afterInteractive') {
      script.async = true;
      script.onload = () => {
        if (onLoad) onLoad();
      };
      document.head.appendChild(script);
    }
    // beforeInteractive is handled directly in layout.tsx
  }, [src, strategy, id, onLoad]);

  return null;
}
