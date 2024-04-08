const Mailer = () => {
  return (
    <div className="container border"
    style={{ marginTop: "50px", width: "50%", backgroundPosition: "center", backgroundSize: "cover" }}>
      <h1>Contact Form</h1>
      <form>
        <label>name</label>
        <input type="text" name="name" />

        <label>Email</label>
        <input type="email" name="user_email" /> 

        <label>Message</label>
        <textarea name='message' rows='4'/> 
        <input type="submit" name='Send' /> 

      </form>
    </div>
  );
};
export default Mailer;