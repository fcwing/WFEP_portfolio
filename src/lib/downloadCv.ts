"use client";

export function downloadMockCv(fileName: string) {
  const content = [
    "Daisy Fong CV",
    "",
    "This is a placeholder CV generated for frontend demo.",
    "Replace this file with your real PDF in production.",
  ].join("\n");

  const blob = new Blob([content], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
