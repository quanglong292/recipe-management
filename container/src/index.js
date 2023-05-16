window.formUrl = "http://localhost:3002";
window.landingUrl = "http://localhost:3003";

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
