import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-wrapper">

      {/* ADMISSION STRIP */}
      <div className="admission-strip">
        Jun’26 Session Admissions Open Now
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
        <div >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="hero-form"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="99a36398-df7f-44fe-a4cd-eeccba85ab44"
            />

            <h2>Admissions Open for 2026–27</h2>

            {/* Student & Parent Name */}
            <div className="form-row">
              <input
                name="Student Name"
                type="text"
                placeholder="Student Name*"
                required
              />
              <input
                name="Parent Name"
                type="text"
                placeholder="Parent Name*"
                required
              />
            </div>

            {/* Current Standard */}
            <div className="form-row">
              <select name="Current Std" required defaultValue="">
                <option value="" disabled>
                  Current Std
                </option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
              </select>

              {/* Mobile Number */}
              <div className="phone-row">
                <select required>
                  <option>+91</option>
                </select>
                <input
                  name="Mobile No"
                  type="tel"
                  placeholder="Mobile No*"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <input
              name="Email"
              type="email"
              placeholder="Email ID"
            />

            {/* City */}
            <input
              name="City"
              type="text"
              placeholder="City*"
              required
            />

            {/* Consent */}
            <label className="checkbox">
              <input type="checkbox" required/>
              <span>
                By entering these details I agree to be contacted via Email, SMS,
                WhatsApp & Voice calls as per the Privacy Policy.
              </span>
            </label>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}
