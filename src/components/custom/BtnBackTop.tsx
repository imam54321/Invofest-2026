import React from "react";
import { LuRocket } from "react-icons/lu";

const BtnBackTop = () => {
  return (
    <React.Fragment>
      <div className="fixed bottom-7 sm:bottom-5 right-5 flex flex-row items-center justify-center gap-3 sm:gap-5 z-20">
        <button
          type="button"
          aria-label="Kembali ke atas"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative flex h-14 w-14 items-center justify-center overflow-visible rounded-full border border-white/30 bg-invofest/70 text-invofest_light shadow-lg shadow-invofest/30 ring-1 ring-invofest_light/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-invofest_light hover:bg-invofest_secondary/80 hover:shadow-xl hover:shadow-invofest_light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-invofest_light focus-visible:ring-offset-2 focus-visible:ring-offset-invofest"
        >
          <span className="absolute bottom-3 h-5 w-1 rounded-full bg-invofest_light/80 opacity-0 blur-[2px] transition-all duration-300 group-hover:translate-y-3 group-hover:opacity-100 group-focus-visible:translate-y-3 group-focus-visible:opacity-100" />
          <LuRocket className="relative z-10 h-6 w-6 transition-all duration-500 ease-in group-hover:-translate-y-8 group-hover:rotate-[-12deg] group-hover:opacity-0 group-focus-visible:-translate-y-8 group-focus-visible:rotate-[-12deg] group-focus-visible:opacity-0" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default BtnBackTop;