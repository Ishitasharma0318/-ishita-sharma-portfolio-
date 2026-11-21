import React, { useEffect, useRef } from "react";

interface Props {
    mode: string;
}

interface Ribbon {
    y: number;       // vertical centre as a fraction of viewport height
    amp: number;     // main wave amplitude (fraction of height)
    freq: number;    // main wave frequency
    speed: number;   // drift speed
    phase: number;
    spread: number;  // max ribbon thickness in px
    twist: number;   // how quickly the ribbon twists along x
    lines: number;
    from: string;
    to: string;
}

const RIBBONS: Ribbon[] = [
    { y: 0.30, amp: 0.20, freq: 1.6, speed: 0.10, phase: 0.0, spread: 120, twist: 2.2, lines: 26, from: "#c026d3", to: "#6d28d9" },
    { y: 0.78, amp: 0.16, freq: 1.2, speed: 0.07, phase: 2.1, spread: 90, twist: 1.7, lines: 22, from: "#7c3aed", to: "#db2777" },
];

/**
 * Full-page, fixed canvas that draws slowly flowing "string ribbons",
 * echoing the hero artwork. Kept deliberately subtle and paused for users
 * who prefer reduced motion.
 */
function WaveBackground({ mode }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const alpha = mode === "dark" ? 0.32 : 0.18;
        let width = 0;
        let height = 0;
        let frame = 0;
        let last = 0;
        let scroll = window.scrollY;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (reduceMotion) draw(0);
        };

        const draw = (t: number) => {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 1;
            const step = width < 700 ? 16 : 12;
            // a gentle parallax nudge as the page scrolls
            const scrollPhase = scroll * 0.0012;

            for (const r of RIBBONS) {
                const grad = ctx.createLinearGradient(0, 0, width, 0);
                grad.addColorStop(0, r.from);
                grad.addColorStop(1, r.to);
                ctx.strokeStyle = grad;

                for (let i = 0; i < r.lines; i++) {
                    const offset = i / (r.lines - 1) - 0.5;
                    ctx.globalAlpha = alpha * (0.35 + 0.65 * (1 - Math.abs(offset) * 2) ** 0.5);
                    ctx.beginPath();
                    for (let x = -step; x <= width + step; x += step) {
                        const u = x / width;
                        const base =
                            r.y * height +
                            Math.sin(u * Math.PI * r.freq + t * r.speed + r.phase + scrollPhase) * r.amp * height +
                            Math.sin(u * Math.PI * r.freq * 2.3 - t * r.speed * 0.6 + r.phase) * r.amp * height * 0.25;
                        const thickness = r.spread * Math.sin(u * Math.PI * r.twist + t * r.speed * 0.8 + r.phase);
                        const y = base + offset * thickness;
                        if (x === -step) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                }
            }
            ctx.globalAlpha = 1;
        };

        const loop = (now: number) => {
            // ~30fps is plenty for a slow ambient effect
            if (now - last > 33) {
                draw(now / 1000);
                last = now;
            }
            frame = requestAnimationFrame(loop);
        };

        const onScroll = () => {
            scroll = window.scrollY;
            if (reduceMotion) draw(0);
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("scroll", onScroll, { passive: true });
        if (reduceMotion) {
            draw(0);
        } else {
            frame = requestAnimationFrame(loop);
        }

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", onScroll);
        };
    }, [mode]);

    return <canvas ref={canvasRef} className="wave-background" aria-hidden="true" />;
}

export default WaveBackground;
