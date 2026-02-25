// lib/emailTemplates.js

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const formatDate = (value) => {
  if (!value) return "—";
  // Accept YYYY-MM-DD or MM/DD/YYYY or Date-ish strings
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "2-digit" });
};

const formatDateTime = (value) => {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const normalizeTourName = (tourSlugOrName = "") => {
  const s = String(tourSlugOrName).replace(/[-_]+/g, " ").trim();
  // Title Case-ish
  return s
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

const getWhatsAppLink = (phone = "") => {
  const digits = String(phone).replace(/[^\d]/g, "");
  // If starts with 0, user probably gave local format; but you gave +20.. so ok
  return `https://wa.me/${digits}`;
};

const row = (label, value) => `
  <tr>
    <td style="padding:10px 0;color:#B9C0CC;font-size:13px;width:160px;vertical-align:top;">${escapeHtml(
      label
    )}</td>
    <td style="padding:10px 0;color:#EAF0FF;font-size:14px;vertical-align:top;font-weight:600;">
      ${escapeHtml(value || "—")}
    </td>
  </tr>
`;

const wrapLayout = ({ title, preheader, bodyHtml, brandName = "El Khazany Tours" }) => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <style>
      @media (max-width: 640px) {
        .container { padding: 18px !important; }
        .card { padding: 18px !important; }
        .btn { display:block !important; width:100% !important; text-align:center !important; }
        .muted { font-size:12px !important; }
      }
    </style>
  </head>
  <body style="margin:0;background:#070A0F;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;">
    <span style="display:none;visibility:hidden;opacity:0;color:transparent;height:0;width:0;">
      ${escapeHtml(preheader || "")}
    </span>

    <div style="background:radial-gradient(1200px 600px at 20% 0%, rgba(255,210,56,.22), rgba(7,10,15,0) 60%),
                        radial-gradient(900px 500px at 90% 10%, rgba(56,189,248,.10), rgba(7,10,15,0) 55%),
                        #070A0F;">
      <div class="container" style="max-width:720px;margin:0 auto;padding:28px;">
        
        <div style="padding:18px 18px 8px;color:#F8FAFF;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:10px;height:10px;border-radius:999px;background:#FFD238;box-shadow:0 0 18px rgba(255,210,56,.55);"></div>
            <div style="font-weight:800;letter-spacing:.4px;font-size:18px;">${escapeHtml(brandName)}</div>
          </div>
          <div style="color:#9AA4B2;font-size:12px;margin-top:6px;">Private Egypt Tours • Premium Service</div>
        </div>

        <div class="card" style="background:rgba(15,18,26,.72);border:1px solid rgba(255,255,255,.08);
              border-radius:18px;padding:22px;box-shadow:0 10px 45px rgba(0,0,0,.55);">
          ${bodyHtml}
        </div>

        <div class="muted" style="color:#7C8796;font-size:13px;line-height:1.6;padding:14px 6px 0;">
          <div>© ${new Date().getFullYear()} ${escapeHtml(brandName)}. All rights reserved.</div>
          <div style="margin-top:6px;">If you didn’t request this, you can ignore this email.</div>
        </div>

      </div>
    </div>
  </body>
</html>
`;

export function bookingInternalEmail({ brandName, waNumber, data }) {
  const waLink = getWhatsAppLink(waNumber);
  const tourName = normalizeTourName(data?.tour_name || data?.tour_slug || "");
  const subject = `New Booking Request • ${brandName} • ${tourName || "Tour"}`;

  const bodyHtml = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px;flex-wrap:wrap;">
      <div>
        <h1 style="margin:0;color:#FFFFFF;font-size:22px;letter-spacing:.2px;">
          New booking request received
        </h1>
        <div style="margin-top:8px;color:#AAB4C5;font-size:13px;">
          Booking ID: <span style="color:#FFD238;font-weight:800;">${escapeHtml(data?.booking_id || "—")}</span>
          &nbsp;•&nbsp; Submitted: ${escapeHtml(formatDateTime(data?.created_at))}
        </div>
      </div>

      <a class="btn" href="${waLink}" target="_blank"
         style="background:linear-gradient(135deg,#FFD238,#FFB703);color:#101317;text-decoration:none;
                padding:12px 14px;border-radius:999px;font-weight:900;letter-spacing:.3px;box-shadow:0 10px 22px rgba(255,210,56,.18);">
        Open WhatsApp
      </a>
    </div>

    <div style="height:14px"></div>
    <div style="border-top:1px solid rgba(255,255,255,.08);margin:12px 0 6px;"></div>

    <table style="width:100%;border-collapse:collapse;">
      ${row("Full name", data?.full_name)}
      ${row("Email", data?.email)}
      ${row("Phone / WhatsApp", data?.phone)}
      ${row("Tour", tourName)}
      ${row("Tour date", formatDate(data?.tour_date))}
      ${row("Guests", String(data?.guests ?? "—"))}
      ${row("Preferred contact", data?.preferred_contact)}
      ${row("Notes", data?.notes)}
    </table>

    <div style="height:14px"></div>

    <div style="background:rgba(255,210,56,.08);border:1px solid rgba(255,210,56,.20);border-radius:14px;padding:14px;">
      <div style="color:#FFD238;font-weight:900;">Recommended next steps</div>
      <ul style="margin:10px 0 0;color:#D7DEEA;line-height:1.8;padding-left:18px;">
        <li>Reply to the client within <b>10–30 minutes</b> for best conversion.</li>
        <li>Confirm availability, pickup, language preference, and itinerary details.</li>
        <li>Send payment / deposit instructions if needed.</li>
      </ul>
    </div>
  `;

  return {
    subject,
    html: wrapLayout({
      title: subject,
      preheader: `New booking: ${tourName} • ${data?.full_name || ""}`,
      bodyHtml,
      brandName,
    }),
  };
}

export function bookingCustomerEmail({ brandName, waNumber, data }) {
  const waLink = getWhatsAppLink(waNumber);
  const tourName = normalizeTourName(data?.tour_name || data?.tour_slug || "");
  const subject = `We received your booking request • ${brandName}`;

  const bodyHtml = `
    <h1 style="margin:0;color:#FFFFFF;font-size:22px;letter-spacing:.2px;">
      Your booking request is received ✅
    </h1>

    <div style="margin-top:10px;color:#AAB4C5;font-size:14px;line-height:1.8;">
      Hi <b style="color:#FFFFFF;">${escapeHtml(data?.full_name || "there")}</b>,<br/>
      Thank you for choosing <b style="color:#FFD238;">${escapeHtml(brandName)}</b>.
      We’re reviewing your request now and will contact you shortly to confirm details and availability.
    </div>

    <div style="height:14px"></div>

    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <a class="btn" href="${waLink}" target="_blank"
         style="background:linear-gradient(135deg,#25D366,#13B981);color:#06110A;text-decoration:none;
                padding:12px 14px;border-radius:999px;font-weight:900;letter-spacing:.3px;">
        Chat on WhatsApp
      </a>

      <a class="btn" href="mailto:${escapeHtml(process.env.BOOKINGS_TO_EMAIL || "")}"
         style="background:transparent;border:1px solid rgba(255,255,255,.18);color:#EAF0FF;text-decoration:none;
                padding:12px 14px;border-radius:999px;font-weight:800;">
        Reply by Email
      </a>
    </div>

    <div style="height:16px"></div>
    <div style="border-top:1px solid rgba(255,255,255,.08);margin:12px 0 6px;"></div>

    <div style="color:#EAF0FF;font-weight:900;margin-top:10px;">Your request summary</div>

    <table style="width:100%;border-collapse:collapse;">
      ${row("Booking ID", data?.booking_id)}
      ${row("Tour", tourName)}
      ${row("Tour date", formatDate(data?.tour_date))}
      ${row("Guests", String(data?.guests ?? "—"))}
      ${row("Preferred contact", data?.preferred_contact)}
      ${row("Notes", data?.notes)}
    </table>

    <div style="height:14px"></div>

    <div style="background:rgba(56,189,248,.08);border:1px solid rgba(56,189,248,.18);border-radius:14px;padding:14px;">
      <div style="color:#BDEBFF;font-weight:900;">What happens next?</div>
      <ol style="margin:10px 0 0;color:#D7DEEA;line-height:1.8;padding-left:18px;">
        <li>We confirm availability & itinerary.</li>
        <li>We arrange pickup details (hotel / location / time).</li>
        <li>We finalize everything and send you confirmation.</li>
      </ol>
    </div>

    <div style="margin-top:14px;color:#9AA4B2;font-size:13px;line-height:1.7;">
      If you have urgent changes, contact us on WhatsApp and mention your Booking ID:
      <b style="color:#FFD238;">${escapeHtml(data?.booking_id || "—")}</b>.
    </div>
  `;

  return {
    subject,
    html: wrapLayout({
      title: subject,
      preheader: `Booking received • ${tourName} • We will contact you shortly`,
      bodyHtml,
      brandName,
    }),
  };
}