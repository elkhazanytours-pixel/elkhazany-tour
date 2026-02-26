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

const normalizeTourName = (value = "") => {
  const s = String(value || "").trim();
  if (!s) return "Tour";
  return s
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
};

const getWhatsAppLink = (waNumber) => {
  const raw = String(waNumber || "").replace(/[^\d]/g, "");
  const phone = raw.startsWith("2") ? raw : `2${raw}`; // Egypt
  return `https://wa.me/${phone}`;
};

const baseHtml = ({ brandName, bodyHtml }) => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(brandName)}</title>
  </head>
  <body style="margin:0;background:#0B0B0F;font-family:Inter,Arial,sans-serif;">
    <div style="max-width:680px;margin:0 auto;padding:28px 16px;">
      <div style="background:linear-gradient(180deg,rgba(255,199,0,0.10),rgba(255,255,255,0));border:1px solid rgba(255,255,255,0.12);border-radius:18px;overflow:hidden;">
        <div style="padding:22px 22px 8px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:10px;height:10px;border-radius:999px;background:#FFC700;"></div>
            <div style="color:#FFC700;font-weight:700;letter-spacing:0.2px;">${escapeHtml(
              brandName
            )}</div>
          </div>
          <div style="height:1px;background:rgba(255,255,255,0.08);margin:14px 0 0;"></div>
        </div>

        <div style="padding:18px 22px 22px;color:rgba(255,255,255,0.92);line-height:1.55;">
          ${bodyHtml}
        </div>
      </div>

      <div style="color:rgba(255,255,255,0.45);font-size:12px;margin-top:14px;text-align:center;">
        © ${new Date().getFullYear()} ${escapeHtml(brandName)} • Luxury private tours in Egypt
      </div>
    </div>
  </body>
</html>
`;

function bookingSummaryTable(data) {
  const tourName = normalizeTourName(data?.tour_name || data?.tour_slug || "");
  const rows = [
    ["Booking Code", data?.booking_code || data?.booking_id || data?.id || "—"],
    ["Tour", tourName],
    ["Package", data?.package_name || "—"],
    ["Price / person", data?.price_per_person != null ? `$${Number(data.price_per_person)}` : "—"],
    ["Guests", data?.guests ?? "—"],
    ["Total", data?.total_price != null ? `$${Number(data.total_price)}` : "—"],
    ["Date", formatDate(data?.tour_date)],
    ["Customer", data?.full_name || "—"],
    ["Email", data?.email || "—"],
    ["Phone", data?.phone || "—"],
    ["Notes", data?.notes ? escapeHtml(String(data.notes)).slice(0, 600) : "—"],
    ["Created", formatDateTime(data?.created_at)],
  ];

  return `
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:14px;padding:14px 14px;">
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <tbody>
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 8px;color:rgba(255,255,255,0.60);width:36%;vertical-align:top;">${escapeHtml(
                k
              )}</td>
              <td style="padding:8px 8px;color:rgba(255,255,255,0.92);font-weight:600;">${escapeHtml(
                String(v ?? "—")
              )}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

export function bookingInternalEmail({ brandName, waNumber, data }) {
  const waLink = getWhatsAppLink(waNumber);
  const tourName = normalizeTourName(data?.tour_name || data?.tour_slug || "");
  const subject = `New booking request • ${tourName} • ${brandName}`;

  const bodyHtml = `
    <h1 style="margin:0;color:#FFFFFF;font-size:22px;letter-spacing:0.2px;">
      New Booking Request
    </h1>
    <p style="margin:10px 0 16px;color:rgba(255,255,255,0.70);">
      A new booking request has been submitted on your website.
    </p>

    ${bookingSummaryTable(data)}

    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
      <a href="${waLink}" style="background:#25D366;color:#0B0B0F;text-decoration:none;font-weight:800;padding:12px 14px;border-radius:12px;">
        Open WhatsApp
      </a>
      <a href="mailto:${escapeHtml(data?.email || "")}" style="background:#FFC700;color:#0B0B0F;text-decoration:none;font-weight:800;padding:12px 14px;border-radius:12px;">
        Reply by Email
      </a>
    </div>
  `;

  return { subject, html: baseHtml({ brandName, bodyHtml }) };
}

export function bookingCustomerEmail({ brandName, waNumber, data }) {
  const waLink = getWhatsAppLink(waNumber);
  const tourName = normalizeTourName(data?.tour_name || data?.tour_slug || "");
  const subject = `We received your booking request • ${brandName}`;

  const bodyHtml = `
    <h1 style="margin:0;color:#FFFFFF;font-size:22px;letter-spacing:0.2px;">
      Booking received ✅
    </h1>
    <p style="margin:10px 0 16px;color:rgba(255,255,255,0.70);">
      Thanks, <b>${escapeHtml(data?.full_name || "Guest")}</b> — we received your request and our VIP team will contact you shortly.
    </p>

    ${bookingSummaryTable(data)}

    <div style="margin-top:16px;">
      <a href="${waLink}" style="background:#FFC700;color:#0B0B0F;text-decoration:none;font-weight:800;padding:12px 14px;border-radius:12px;display:inline-block;">
        WhatsApp our team
      </a>
      <p style="margin:10px 0 0;color:rgba(255,255,255,0.55);font-size:12px;">
        If you need urgent assistance, WhatsApp is the fastest way.
      </p>
    </div>
  `;

  return { subject, html: baseHtml({ brandName, bodyHtml }) };
}

// ✅ NEW: Confirmed Email (Auto when status becomes Confirmed)
export function bookingConfirmedEmail({ brandName, waNumber, data }) {
  const waLink = getWhatsAppLink(waNumber);
  const tourName = normalizeTourName(data?.tour_name || data?.tour_slug || "");
  const subject = `Booking confirmed ✅ • ${tourName} • ${brandName}`;

  const bodyHtml = `
    <h1 style="margin:0;color:#FFFFFF;font-size:22px;letter-spacing:0.2px;">
      Your booking is confirmed ✅
    </h1>
    <p style="margin:10px 0 16px;color:rgba(255,255,255,0.70);">
      Hi <b>${escapeHtml(data?.full_name || "Guest")}</b>, your booking has been confirmed.
      Our team will coordinate pickup time & final details with you.
    </p>

    ${bookingSummaryTable({ ...data, status: "Confirmed" })}

    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
      <a href="${waLink}" style="background:#25D366;color:#0B0B0F;text-decoration:none;font-weight:800;padding:12px 14px;border-radius:12px;">
        WhatsApp the team
      </a>
      <a href="mailto:${escapeHtml(process.env.BOOKINGS_TO_EMAIL || "")}" style="background:#FFC700;color:#0B0B0F;text-decoration:none;font-weight:800;padding:12px 14px;border-radius:12px;">
        Contact us by Email
      </a>
    </div>

    <p style="margin:14px 0 0;color:rgba(255,255,255,0.55);font-size:12px;">
      Tip: Keep your booking code ready when messaging us.
    </p>
  `;

  return { subject, html: baseHtml({ brandName, bodyHtml }) };
}