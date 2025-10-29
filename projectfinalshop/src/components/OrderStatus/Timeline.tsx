import type { TimelineEvent } from "../types/order";

export default function Timeline({ items }: { items: TimelineEvent[] }) {
  return (
    <ol className="relative ml-3 mt-3 border-l border-gray-200">
      {items.map((ev, i) => (
        <li key={i} className="mb-3 ml-4">
          <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-[10px]">
            ●
          </span>
          <div className="text-sm text-gray-800">{ev.text}</div>
          <div className="text-xs text-gray-500">{ev.time}</div>
        </li>
      ))}
    </ol>
  );
}
