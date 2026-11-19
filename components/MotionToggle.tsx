"use client";
import { useSyncExternalStore } from "react";

const EVT = "ia-motion-change";
const subscribe = (cb: () => void) => { window.addEventListener(EVT, cb); return () => window.removeEventListener(EVT, cb); };
const getSnapshot = () => document.documentElement.dataset.motion !== "off";
const getServerSnapshot = () => true;

export default function MotionToggle({ className }: { className?: string }) {
  const on = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = () => {
    const next = on ? "off" : "on";
    document.documentElement.dataset.motion = next;
    try { localStorage.setItem("ia-motion", next); } catch {}
    window.dispatchEvent(new Event(EVT));
  };
  return (
    <button type="button" className={className} onClick={toggle} aria-pressed={on} data-on={on} aria-label={`Motion ${on ? "on" : "off"}`}>
      <span aria-hidden="true" />
      Motion {on ? "on" : "off"}
    </button>
  );
}
