// todo Alex: Test conditional inclusion
if (typeof Temporal === "undefined") {
    await import("temporal-polyfill/global");
}