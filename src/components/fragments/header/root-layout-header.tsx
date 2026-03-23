export default function RootLayoutHeader() {
  return (
    <header
      className="flex justify-start gap-2 items-center py-4 w-full rounded-lg"
      style={{
        background:
          "url('https://otw-tl.com/static/bglos.jpg') center center / cover no-repeat",
        border: "1px solid #dee2e6",
        overflow: "hidden",
      }}
    >
      <img
        className="w-28 h-28"
        src="https://otw-tl.com/static/logo2.png"
        alt="Logo"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">
          Hello, OTW TL Pass User!
        </h1>
        <p className="text-white text-sm">
          Your all-in-one app for life in Dili.
        </p>
        <p className="text-white text-sm">
          Quickly access food delivery and mobile top-ups with a single tap.
        </p>
        <span className="text-white text-sm">
          📍 Only available in Dili, Timor-Leste.
        </span>
      </div>
    </header>
  );
}
