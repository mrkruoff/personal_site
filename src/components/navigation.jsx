function Navigation({ setPage }) {
  const classes = "cursor-pointer m-4";

  const handleClick = (e) => {
    setPage(e.target.innerHTML.toLowerCase());
  };

  return (
    <nav class="flex flex-row justify-between p-4 space-x-4 sticky z-50 bg-gray-300">
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
