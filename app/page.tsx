import TypedText from "@/components/typedText";

export default function Home() {
  return (
    <section
      className="  
    flex flex-col text-xl items-center justify-center gap-4 py-8 md:py-6 border-x-2 border-x-purple-400 sm:border-opacity-100"
    >
      <div className="min-h-72 align-middle max-w-64 sm:max-w-xl inline-block font-bold text-center justify-center pt-10 py-10">
        <TypedText />
      </div>
    </section>
  );
}
