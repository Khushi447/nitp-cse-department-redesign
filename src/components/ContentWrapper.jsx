import React from "react";
import texture from "./images/texture.png";

const ContentWrapper = ({ children }) => {
  return (
    <section className="relative w-full">

      {/* Your Texture Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${texture})` }}
      ></div>

      {/* Light White Overlay for Clean Look */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content Above Texture */}
      <div className="relative z-10">
        {children}
      </div>

    </section>
  );
};

export default ContentWrapper;