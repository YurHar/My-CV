import { createFileRoute } from "@tanstack/react-router";
import { createMiddleware, json } from "@tanstack/react-start";

export interface ContactInfo {
  id: number | string;
  label: string;
  value: string;
  link: string;
}

const contactLoggerMiddleware = createMiddleware().server(async ({ next }) => {
  console.info("➡️ In: /api/contact-info");
  const result = await next();
  result.response.headers.set("x-contact-info", "true");
  console.info("⬅️ Out: /api/contact-info");
  return result;
});

export const Route = createFileRoute("/api/contact")({
  server: {
    middleware: [contactLoggerMiddleware],
    handlers: {
      GET: async () => {
        const contactInfo: ContactInfo[] = [
          { id: 1, label: "Email", value: "yuri.harutyunyan.a@gmail.com", link: "mailto:yuri.harutyunyan.a@gmail.com" },
          { id: 2, label: "Phone", value: "+374 93 597 752", link: "tel:+37493597752" },
          { id: 3, label: "LinkedIn", value: "linkedin.com", link: "https://linkedin.com/in/yuri-harutyunyan" },
          { id: 4, label: "GitHub", value: "github.com", link: "https://github.com" },
          { id: 5, label: "Location", value: "Yerevan, Armenia", link: "#" },
        ];

        return json(contactInfo, { headers: { "Cache-Control": "public, max-age=60" } });
      },
    },
  },
});
