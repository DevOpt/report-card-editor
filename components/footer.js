import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            href="https://www.instagram.com/adume_/"
            target="_blank"
            rel="noopener">
            Adume.
          </a>{" "}
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}
