import React from "react";

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(getTextContent).join("");
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
    return getTextContent(children.props.children);
  }

  return "";
}

export const mdxComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => {
    const text = getTextContent(children);
    const id = slugify(text);

    return (
      <h2
        id={id}
        className="mt-12 mb-5 scroll-mt-24 text-2xl font-bold leading-tight text-[#141414] md:text-3xl"
      >
        {children}
      </h2>
    );
  },

  h3: ({ children }: { children?: React.ReactNode }) => {
    const text = getTextContent(children);
    const id = slugify(text);

    return (
      <h3
        id={id}
        className="mt-8 mb-4 scroll-mt-24 text-xl font-bold leading-tight text-[#141414]"
      >
        {children}
      </h3>
    );
  },
};
