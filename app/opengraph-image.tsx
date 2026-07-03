import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Raju Jena | DevOps Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#020617",
          color: "white",
          padding: "80px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#38bdf8",
            fontWeight: 700,
          }}
        >
          DevOps • Cloud • Platform Engineering
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
            }}
          >
            Raju Jena
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 34,
              color: "#cbd5e1",
            }}
          >
            DevOps Engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          <span>AWS</span>
          <span>Azure</span>
          <span>Kubernetes</span>
          <span>Docker</span>
          <span>Terraform</span>
          <span>GitHub Actions</span>
          <span>Linux</span>
          <span>Prometheous</span>
          <span>Grafana</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}