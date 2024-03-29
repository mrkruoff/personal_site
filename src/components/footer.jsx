import Connenctions from "./connenctions";

function Footer() {
  var year = new Date().getFullYear();

  return (
    <footer class="absolute flex flex-row justify-between inset-x-0 bottom-0 bg-gray-300 p-4">
      {" "}
      <Connenctions />
      <div class="text-center">
        <p>Mark Ruoff &copy; {year}</p>
      </div>
    </footer>
  );
}
export default Footer;
