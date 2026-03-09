// lib/emailTemplates.js

function esc(v) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function money(v, currency = "USD") {
  const n = Number(v);
  if (Number.isNaN(n)) return "";
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(n);
  } catch {
    return `${n} ${currency}`;
  }
}

function bookingCode(data) {
  return data?.booking_code || data?.booking_id || data?.id || "";
}

// ✅ Format children details into readable string
function formatChildren(data) {
  const details = data?.children_details;
  const total = Number(data?.total_children || 0);

  if (!total || total === 0) return null;

  if (Array.isArray(details) && details.length > 0) {
    const parts = details
      .filter((g) => Number(g.count) > 0)
      .map((g) => {
        const label =
          g.ageGroup === "2-6"
            ? `${g.count} child(ren) ages 2–6 (Free)`
            : `${g.count} child(ren) ages 7–12 (50% off)`;
        return label;
      });
    return parts.length > 0 ? parts.join(" · ") : `${total} child(ren)`;
  }

  return `${total} child(ren)`;
}

function baseShell({ brandName, title, subtitle, bodyHtml, accent = "#D4AF37" }) {
  return `
  <div style="background:#0b0c10;padding:32px 12px;font-family:Inter,system-ui,Segoe UI,Arial">
    <div style="max-width:720px;margin:0 auto;background:#111318;border:1px solid rgba(255,255,255,.08);border-radius:18px;overflow:hidden">
      <div style="padding:22px 22px 16px;border-bottom:1px solid rgba(255,255,255,.08);background:linear-gradient(135deg,rgba(212,175,55,.18),rgba(0,0,0,0))">
        <div style="font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:${accent};font-weight:700">${esc(
          brandName
        )}</div>
        <div style="margin-top:8px;font-size:26px;color:#fff;font-weight:800">${esc(title)}</div>
        <div style="margin-top:6px;color:rgba(255,255,255,.72);font-size:14px">${esc(subtitle)}</div>
      </div>

      <div style="padding:22px;color:#e9edf5;font-size:14px;line-height:1.7">
        ${bodyHtml}
      </div>

      <div style="padding:16px 22px;border-top:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.6);font-size:12px">
        This email was sent by ${esc(brandName)}.
      </div>
    </div>
  </div>`;
}

function detailsBlock({ data }) {
  const currency = data?.currency || "USD";

  // ✅ Children summary
  const childrenText = formatChildren(data);

  const rows = [
    ["Booking Code", bookingCode(data)],
    ["Tour", data?.tour_name || data?.tour || ""],
    ["Package", data?.package_name || data?.package || ""],
    ["Adults", data?.people || data?.guests || ""],
    // ✅ Children row — only shown if there are children
    ...(childrenText ? [["Children", childrenText]] : []),
    ["Date", data?.date || data?.tour_date || ""],
    ["Total", money(data?.total_price ?? data?.total, currency)],
    ["Customer", data?.full_name || data?.name || ""],
    ["Email", data?.email || ""],
    ["WhatsApp", data?.whatsapp || data?.phone || ""],
    ["Notes", data?.notes || ""],
  ].filter(([_, v]) => String(v || "").trim().length);

  const tableRows = rows
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:rgba(255,255,255,.65);width:170px">${esc(k)}</td>
        <td style="padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#fff;font-weight:600">${esc(v)}</td>
      </tr>`
    )
    .join("");

  return `
    <div style="border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;background:rgba(255,255,255,.03)">
      <table style="width:100%;border-collapse:collapse">${tableRows}</table>
    </div>`;
}

// ✅ Internal email when booking is created
export function bookingInternalEmail({ brandName, waNumber, data }) {
  const code = bookingCode(data);
  const subject = `New Booking • ${code || "El Khazany Tour"}`;

  const body = `
    <p style="margin:0 0 14px;color:rgba(255,255,255,.85)">
      A new booking has been submitted.
    </p>
    ${detailsBlock({ data })}
    <p style="margin:16px 0 0;color:rgba(255,255,255,.75)">
      WhatsApp: <a style="color:#D4AF37" href="https://wa.me/${esc(waNumber)}">wa.me/${esc(waNumber)}</a>
    </p>
  `;

  return {
    subject,
    html: baseShell({
      brandName,
      title: "New Booking Received",
      subtitle: "Action required • Review details below",
      bodyHtml: body,
    }),
  };
}

// ✅ Customer email when booking is created
export function bookingCustomerEmail({ brandName, waNumber, data }) {
  const code = bookingCode(data);
  const subject = `Booking Received • ${code || "El Khazany Tour"}`;

  const body = `
    <p style="margin:0 0 14px;color:rgba(255,255,255,.85)">
      We received your booking request. Our team will contact you shortly to confirm availability.
    </p>
    ${detailsBlock({ data })}
    <p style="margin:16px 0 0;color:rgba(255,255,255,.75)">
      Need help? WhatsApp us:
      <a style="color:#D4AF37" href="https://wa.me/${esc(waNumber)}">wa.me/${esc(waNumber)}</a>
    </p>
  `;

  return {
    subject,
    html: baseShell({
      brandName,
      title: "Booking Request Received",
      subtitle: "Pending confirmation",
      bodyHtml: body,
    }),
  };
}

// ✅ Internal email when status changes
export function bookingStatusInternalEmail({ brandName, waNumber, data }) {
  const code = bookingCode(data);
  const status = data?.status || "Updated";
  const subject = `Status Updated • ${status} • ${code || ""}`.trim();

  const body = `
    <p style="margin:0 0 14px;color:rgba(255,255,255,.85)">
      Booking status changed to <b>${esc(status)}</b>.
    </p>
    ${detailsBlock({ data })}
    <p style="margin:16px 0 0;color:rgba(255,255,255,.75)">
      WhatsApp: <a style="color:#D4AF37" href="https://wa.me/${esc(waNumber)}">wa.me/${esc(waNumber)}</a>
    </p>
  `;

  return {
    subject,
    html: baseShell({
      brandName,
      title: "Booking Status Updated",
      subtitle: `New status: ${status}`,
      bodyHtml: body,
    }),
  };
}

// ✅ Customer email when status changes
export function bookingStatusCustomerEmail({ brandName, waNumber, data }) {
  const code = bookingCode(data);
  const status = data?.status || "Updated";
  const subject = `Booking Update • ${status} • ${code || ""}`.trim();

  const body = `
    <p style="margin:0 0 14px;color:rgba(255,255,255,.85)">
      Your booking status is now <b>${esc(status)}</b>.
    </p>
    ${detailsBlock({ data })}
    <p style="margin:16px 0 0;color:rgba(255,255,255,.75)">
      Questions? WhatsApp:
      <a style="color:#D4AF37" href="https://wa.me/${esc(waNumber)}">wa.me/${esc(waNumber)}</a>
    </p>
  `;

  return {
    subject,
    html: baseShell({
      brandName,
      title: "Booking Status Update",
      subtitle: `Current status: ${status}`,
      bodyHtml: body,
    }),
  };
}

// ✅ Special template: Confirmed email
export function bookingConfirmedEmail({ brandName, waNumber, data }) {
  const code = bookingCode(data);
  const subject = `Confirmed ✅ • ${code || "Your Booking"}`;

  const body = `
    <p style="margin:0 0 14px;color:rgba(255,255,255,.88)">
      Your booking is <b>Confirmed</b>. We're excited to host you ✨
    </p>
    ${detailsBlock({ data })}
    <p style="margin:16px 0 0;color:rgba(255,255,255,.75)">
      For quick support, WhatsApp:
      <a style="color:#D4AF37" href="https://wa.me/${esc(waNumber)}">wa.me/${esc(waNumber)}</a>
    </p>
  `;

  return {
    subject,
    html: baseShell({
      brandName,
      title: "Booking Confirmed",
      subtitle: "See your details below",
      bodyHtml: body,
    }),
  };
}