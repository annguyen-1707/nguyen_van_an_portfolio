import { renderToBuffer } from "@react-pdf/renderer";
import ResumePDF from "@/components/resume/ResumePDF";
import { resumes } from "@/lib/resume/data";

// @react-pdf/renderer needs Node APIs (fs, streams) to render — not available on Edge.
// This still only runs at `next build` time: static export has no server runtime.
export const runtime = "nodejs";

// Static export requires every dynamic segment to be enumerated at build time —
// no on-demand rendering for unknown `cvType` values.
export const dynamicParams = false;

// `next export` copies only the response body into `out/`, not the headers
// (Content-Type/Content-Disposition) captured in the build metadata — static
// file servers have no way to know these are PDFs unless the filename says
// so. Baking `.pdf` into the exported segment lets any host infer the MIME
// type from the extension alone.
export function generateStaticParams() {
  return Object.keys(resumes).map((cvType) => ({ cvType: `${cvType}.pdf` }));
}

const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "https://nguyen-van-an-portfolio.vercel.app")
).replace(/\/$/, "");

function removeDiacritics(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export async function GET(_request: Request, { params }: { params: Promise<{ cvType: string }> }) {
  const { cvType: cvTypeParam } = await params;
  const cvType = cvTypeParam.replace(/\.pdf$/, "");
  const data = resumes[cvType] ?? resumes.default;
  if (!data) {
    return new Response("Resume data not found", { status: 404 });
  }

  const buffer = await renderToBuffer(
    <ResumePDF data={data} type={cvType} origin={SITE_ORIGIN} />
  );

  const safeName = removeDiacritics(data.personal.name).replace(/\s+/g, "_");
  const filename = `Resume_${cvType}_${safeName}.pdf`;

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
    },
  });
}
