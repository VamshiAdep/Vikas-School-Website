import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-wrapper">

      {/* ADMISSION STRIP */}
      <div className="admission-strip">
        Jan’26 Session Admissions Open Now
      </div>

      {/* HERO */}
      <section className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="yellow-vector-conatiner">
            <img
              className="yellow-vector"
              src="https://amityonline.com/_sb/Vector_95d20642dd.webp"
              alt=""
            />
          </div>
          <div className="student-img-container">
            <img
              className="student-img"
              src="https://amityonline.com/_s/global_learning_2330ecfe3c.webp"
              alt="Student"
            />
          </div>
          <div className="hero-content">
            <h1>
              Unlock Global <br />
              Learning With Our <br />
              Innovative Online <br />
              Degree Programs
            </h1>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="hero-form">
          <h2>Connect With Our Experts</h2>

          <div className="form-row">
            <input placeholder="Enter your full name" />
            <div className="phone-row">
              <select>
                <option>+91</option>
              </select>
              <input placeholder="Enter your no." />
            </div>
          </div>

          <input placeholder="abc@xyz.com" />
          <select>
            <option>Select Degree</option>
          </select>
          <select>
            <option>Select Program</option>
          </select>

          <label className="checkbox">
            <input type="checkbox" checked readOnly />
            <span>
              By entering these details I agree to be contacted via Email, SMS,
              WhatsApp & Voice calls as per the Privacy Policy.
            </span>
          </label>

          <button className="submit-btn">Submit</button>
        </div>
      </section>
    </div>
  );
}
