import Image from "next/image";

export default function Footer() {
  return (
    <main className="w-full h-20 absolute bottom-0 bg-sky-900 text-white">
      <div className="flex justify-center gap-10 items-center h-full">
        <Image
          src="/images/logo_monkeypatch.jpg"
          alt="Logo MonkeyPatch"
          width="140"
          height="20"
          className="relative"
        />

        <Image
          src="/images/logo_harrycow.jpg"
          alt="Logo Harrycow"
          width="60"
          height="20"
          className="relative"
        />

        <Image
          src="/images/logo_nextjs.jpg"
          alt="Logo Next.js"
          width="80"
          height="20"
          className="relative"
        />

        <Image
          src="/images/logo_qwik.jpg"
          alt="Logo Qwik"
          width="140"
          height="20"
          className="relative"
        />
      </div>
    </main>
  );
}
