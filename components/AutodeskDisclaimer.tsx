export default function AutodeskDisclaimer() {
  return (
    <aside
      aria-label="Aviso sobre marcas registradas"
      className="mx-auto w-full max-w-6xl px-5 py-8"
    >
      <div className="rounded-xl border border-white/10 bg-[#111111] p-5 md:p-6">
        <div className="mb-3 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm text-gray-300"
          >
            ℹ
          </span>

          <h2 className="text-sm font-semibold text-gray-200">
            Trademark Disclaimer
          </h2>
        </div>

        <p className="text-xs leading-relaxed text-gray-400 md:text-sm">
          AutoCAD® and all other Autodesk software products mentioned on this
          website are registered trademarks of Autodesk, Inc., and/or its
          subsidiaries, and/or affiliates in the USA and/or other countries.
          This website is independent of Autodesk, Inc., and is not affiliated
          with, authorized, endorsed, sponsored, or otherwise approved by
          Autodesk, Inc.
        </p>
      </div>
    </aside>
  );
}
