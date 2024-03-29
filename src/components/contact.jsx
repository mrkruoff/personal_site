function Contact() {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col space-y-4">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message: <br />
          <textarea id="freeform" name="freeform" rows="4" cols="50" />
        </label>
        <button type="submit">Click to submit</button>
      </form>
    </div>
  );
}
export default Contact;
