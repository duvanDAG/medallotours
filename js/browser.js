let browser;

if (navigator.userAgent.includes("Chrome")) {
  browser = "Chrome";
} else if (navigator.userAgent.includes("Firefox")) {
  browser = "Firefox";
} else if (navigator.userAgent.includes("Safari")) {
  browser = "Safari";
} else if (navigator.userAgent.includes("Opera")) {
  browser = "Opera";
} else {
  browser = "Unknown";
}

console.log(`You are using ${browser}.`);