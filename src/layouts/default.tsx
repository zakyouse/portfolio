import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-lenis
      className={`
        relative flex flex-col min-h-screen
        bg-no-repeat bg-cover
        bg-[url('../assets/black-painted-wall-textured-background.jpg')]
        md:bg-none md:bg-black
        text-white
      `}
    >
      <Navbar />
      <main className="w-full grow">{children}</main>
    </div>
  );
}
