"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!items.length) return;

    const headings = items
      .map(item => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -65% 0px",
        threshold: 0,
      }
    );

    headings.forEach(heading => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, [items]);

  if (!items.length) {
    return null;
  }

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 100;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);

    setActiveId(id);
  };

  return (
    <nav
      aria-label="Índice do artigo"
      className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
    >
      <h2 className="mb-4 text-base font-bold text-[#141414]">Neste artigo</h2>

      <ol className="space-y-1">
        {items.map(item => (
          <li
            key={item.id}
            className={
              item.level === 3 ? "ml-4" : item.level >= 4 ? "ml-8" : ""
            }
          >
            <a
              href={`#${item.id}`}
              onClick={event => handleClick(event, item.id)}
              className={`block rounded-lg px-3 py-2 text-sm leading-relaxed transition-colors ${
                activeId === item.id
                  ? "bg-[#ff0f57]/10 font-semibold text-[#ff0f57]"
                  : "text-gray-600 hover:bg-white hover:text-[#ff0f57]"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
