function Navigation({ setPage }) {
  const classes = "cursor-pointer";

  const handleClick = (e) => {
    setPage(e.target.innerHTML.toLowerCase());
  };

  return (
    <nav class="flex flex-row justify-between p-4 space-x-4 sticky top-0 bg-gray-300">
      <span>Mark Ruoff</span>
      <div class="space-x-4">
        <span className={classes} onClick={handleClick}>
          About
        </span>
        <span className={classes} onClick={handleClick}>
          Experience
        </span>
        <span className={classes} onClick={handleClick}>
          Contact
        </span>
      </div>
    </nav>
  );
}
export default Navigation;
