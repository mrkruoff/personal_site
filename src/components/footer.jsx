import Connenctions from "./connenctions";

function Footer() {
  var year = new Date().getFullYear();

  return (
    <footer className="absolute flex flex-row justify-between inset-x-0 md:bottom-0 bg-emerald-950  md:p-4">
      {" "}
      <Connenctions />
      <div class="text-center text-white">
        <p>Mark Ruoff &copy; {year}</p>
      </div>
    </footer>
  );
}
export default Footer;
