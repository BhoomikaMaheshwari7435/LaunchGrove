import { useEffect } from 'react';

export function useMagicCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'magic-cursor';
    cursor.innerHTML = '✨';
    document.body.appendChild(cursor);

    const sparkles: HTMLElement[] = [];

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      // Create sparkle effect
      if (Math.random() > 0.8) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = e.clientX + Math.random() * 20 - 10 + 'px';
        sparkle.style.top = e.clientY + Math.random() * 20 - 10 + 'px';
        document.body.appendChild(sparkle);
        sparkles.push(sparkle);

        setTimeout(() => {
          sparkle.remove();
          const index = sparkles.indexOf(sparkle);
          if (index > -1) sparkles.splice(index, 1);
        }, 1000);
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cursor.remove();
      sparkles.forEach(sparkle => sparkle.remove());
    };
  }, []);
}