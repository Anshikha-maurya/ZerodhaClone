import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }

    // ✅ Email Format Validation (Regex)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    console.log("User signed up with email:", email);
    
    // ✅ Email store karke dashboard par bhejo
    localStorage.setItem("userEmail", email);
    window.location.href = "http://localhost:3001";
  };

  return (
    <>
      <div className="container mt-5 p-5 mb-5">
        <div className="row align-items-center">
          {/* Heading */}
          <div className="col-12 text-center">
            <h1 className="mt-3 fs-2">Open a free demat and trading account online</h1>
          </div>

          {/* Description */}
          <div className="col-12 text-muted text-center">
            <p className="fs-5">
              Start investing brokerage free and join a community of 1.5+ crore investors and traders
            </p>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 p-3 text-center">
            <img src="media/images/kiteback.avif" className="img-fluid rounded" alt="Kite" />
          </div>

          {/* Signup Form Section */}
          <div className="col-12 col-md-6 p-5 mt-3 mt-md-5 text-center text-md-start">
            <h1 className="">Signup now</h1>
            <p className="mb-4 text-muted fs-5">Or track your existing application</p>

            {/* ✅ Email Input with onChange */}
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mt-3 p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Button */}
            <div className="col-12 d-flex justify-content-center justify-content-md-start">
              <button
                className="btn btn-primary fs-5 p-3 mt-3 w-75 w-md-50 w-lg-25"
                onClick={handleSignup}
              >
                Go to Dashboard
              </button>
            </div>

            <p className="mb-4 mt-3 text-muted small">
              By proceeding, you agree to the Zerodha terms & privacy policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
