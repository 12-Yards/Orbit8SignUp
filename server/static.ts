import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectRouteMeta } from "./seo";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexHtml = fs.readFileSync(
    path.resolve(distPath, "index.html"),
    "utf-8",
  );

  app.use(express.static(distPath, { index: false }));

  // fall through to index.html if the file doesn't exist,
  // injecting per-route SEO meta tags for crawlers
  app.use("/{*path}", (req, res) => {
    const path = req.originalUrl.split("?")[0];
    res
      .status(200)
      .set({ "Content-Type": "text/html" })
      .send(injectRouteMeta(indexHtml, path));
  });
}
