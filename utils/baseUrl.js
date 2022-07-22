const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://ecgc.co.zw"
    : "http://localhost:3000";

export default baseUrl;
