import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import {
  resendVerificationCode,
  verifyCompany,
} from "../../services/authenticationService.js";
import { Layout } from "../Global/Layout.jsx";

export function MainCompanyVerify() {
  const location = useLocation();
  const navigate = useNavigate();
  const companyEmail = location.state?.companyEmail || "";
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await verifyCompany({
        companyEmail: companyEmail,
        verificationCode: code,
      });
      navigate("/company-login");
    } catch (error) {
      setError("invalid verification code");
      console.log(error);
    }
  };

  const handleResend = async () => {
    try {
      await resendVerificationCode(email);
      setMessage("A new verification code has been sent to your email.");
    } catch (error) {
      setError("Failed to resend verification code.");
      console.log(error);
    }
  };
  return (
    <main className="">
      <Layout>
        <div className="flex items-center w-full">
          <div className="flex flex-col items-center w-full max-w-[505px] mx-auto py-12 px-6 mt-7.5 mb-7.5 border border-[#222A24]/40">
            <div className="w-full">
              <div className="flex flex-col mb-5">
                <h2 className="text-black t-heading leading-8">
                  Verify account to{" "}
                </h2>
                <p className="text-blue t-label">Find Job</p>
              </div>

              <p className="t-body text-black">
                Please enter the 4-digit verification code we sent via SMS:
              </p>

              <form
                action=""
                className="flex flex-col gap-7 mt-7.5"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="verificationcode"
                    className="t-label text-black"
                  >
                    Verification code
                  </label>
                  <input
                    type="text"
                    id="verificationcode"
                    name="verificationcode"
                    value={code}
                    onChange={handleChange}
                    required={true}
                    placeholder="Enter your verification code"
                    className="py-4 p-6.5 border border-[#222A24] rounded-md input-kosugi
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
                  />
                </div>

                {error && <p className="text-red-500">{error}</p>}
                {message && <p className="text-green-500">{message}</p>}

                <button
                  onClick={handleResend}
                  className="t-label text-black transition-colors ease-in-out duration-300
                                           hover:text-black/70"
                >
                  Resend Your Verification code
                </button>

                <button
                  type="submit"
                  className="w-full h-14 bg-blue text-white button-kosugi transition-colors ease-in-out duration-300 hover:bg-blue/80"
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
