import FileUpload from "./components/FileUpload";
export default function Home() {
  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      {/* left */}
      <section className="h-screen w-1/2 border-r-2">
        <FileUpload />
      </section>
      {/* right */}
      <section className="h-screen w-1/2 ">right</section>
    </div>
  );
}
