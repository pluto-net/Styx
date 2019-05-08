interface PaperSource {
  id: number;
  paperId: number;
  url: string;
  isPdf: boolean;
}

const PDF_MIME_TYPES = [
  "application/pdf",
  "application/x-pdf",
  "application/octet-stream",
  "application/acrobat",
  "applications/vnd.pdf",
  "text/pdf",
  "text/x-pdf"
];

function getPDFURL(sources: PaperSource[]): Promise<PaperSource> {
  return new Promise((resolve, reject) => {
    let errorCount = 0;
    sources.forEach(source => {
      fetch(source.url, { method: "HEAD" })
        .then(res => {
          const contentType = res.headers.get("content-type") || "";
          const isPDF = PDF_MIME_TYPES.some(type => contentType.includes(type));
          if (isPDF) {
            resolve(source);
          } else {
            throw new Error();
          }
        })
        .catch(_err => {
          errorCount++;
          if (errorCount === sources.length) {
            reject("NO PDF URL");
          }
        });
    });
  });
}

window.addEventListener(
  "message",
  async event => {
    // We only accept messages from ourselves
    if (event.source !== window) return;

    switch (event.data.type) {
      case "CHECK_INSTALL_SCINAPSE_EXTENSION":
        break;

      case "GET_PDF": {
        const sources: PaperSource[] = event.data.sources;

        try {
          const pdfSource = await getPDFURL(sources);
          fetch(pdfSource.url)
            .then(res => {
              if (!res.ok) {
                throw new Error(
                  `${res.status} - ${res.statusText}, ${res.body}`
                );
              }
              return res.blob();
            })
            .then(blob => {
              event.ports[0].postMessage({
                success: true,
                data: blob
              });
            });
        } catch (err) {
          console.error(err);
          event.ports[0].postMessage({
            success: false,
            message: err.message
          });
        }
        break;
      }

      default:
        break;
    }
  },
  false
);
