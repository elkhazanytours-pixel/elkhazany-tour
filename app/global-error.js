"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0B0B0F", color: "white" }}>
        <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
          <div style={{
            maxWidth: 720,
            width: "100%",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 24,
            padding: 28
          }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>Something went wrong</h1>
            <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 10 }}>
              Temporary glitch. Please retry.
            </p>

            <button
              onClick={() => reset()}
              style={{
                marginTop: 16,
                padding: "12px 18px",
                borderRadius: 999,
                border: "1px solid rgba(234,179,8,0.35)",
                background: "rgba(234,179,8,0.12)",
                color: "#fde68a",
                cursor: "pointer",
                fontWeight: 700
              }}
            >
              Retry
            </button>

            {/* مفيد وقت الديباج فقط */}
            <pre style={{
              marginTop: 16,
              whiteSpace: "pre-wrap",
              color: "rgba(255,255,255,0.55)",
              fontSize: 12
            }}>
              {error?.message}
            </pre>
          </div>
        </div>
      </body>
    </html>
  );
}