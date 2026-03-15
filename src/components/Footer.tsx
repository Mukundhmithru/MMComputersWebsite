import { useEffect, useState } from "react";
export function Footer() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="mt-4 border-t border-slate-600 bg-slate-900 text-slate-200 py-4">
      <div className="mm-container mx-auto px-4">
        <div
          className={`grid gap-4 grid-cols-1 md:grid-cols-3 flex ${
            isMobileView ? "flex-col items-center" : "flex-row justify-around"
          }`}
          style={{ padding: "0px 20px", display: "flex" }}
        >
          <div
            className={`${isMobileView ? "flex flex-col items-center" : ""}`}
          >
            <h6 className="font-semibold text-lg mb-2">MM Computers</h6>
            <p className="text-slate-400 text-sm">
              IT Consulting & Digital Solutions
            </p>
          </div>
          <div
            className={`${isMobileView ? "flex flex-col items-center" : ""}`}
          >
            <h6 className="font-semibold text-lg mb-2">Contact Us</h6>
            <div className="flex items-center mb-1">
              <span className="mr-2 text-slate-400">📞</span>
              <p className="text-slate-400 text-sm">
                <a
                  href="tel:+918807329654"
                  className="text-slate-400 hover:text-slate-200 no-underline"
                >
                  +91 88073 29654
                </a>{" "}
                (or){" "}
                <a
                  href="tel:+918220451927"
                  className="text-slate-400 hover:text-slate-200 no-underline"
                >
                  82204 51927
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-slate-400">✉</span>
              <p className="text-slate-400 text-sm">
                <a
                  href="mailto:mmcomputers.nmm@gmail.com"
                  className="text-slate-400 hover:text-slate-200 no-underline"
                >
                  mmcomputers.nmm@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div
            className={`${isMobileView ? "flex flex-col items-center" : ""}`}
          >
            <h6 className="font-semibold text-lg mb-2">Address</h6>
            <div className="flex items-start">
              <span className="mr-2 mt-1 text-slate-400">📍</span>
              <p className="text-slate-400 text-sm">
                No. 5A, SBI Road, South Street,
                <br />
                Nannilam, Thiruvarur (Dt) – 610105
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-2 border-t border-slate-600 text-center">
          <p className="text-slate-400 text-sm">
            © 2026 by MM Computers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
