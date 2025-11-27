// src/pages/SearchResult.jsx
import React, { useEffect, useState } from "react";
import { runSearchResult, cleanupSearchResult } from "./searchResultClient";

export default function SearchResult() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    let mounted = true;

    fetch("/search_result_page.html")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!mounted) return;
        setHtml(text);

        // Wait until the injected HTML is parsed and machine cards (or grid) exist.
        (function waitForSearchCards(retries = 0) {
          const maxRetries = 40; // 40 * 50ms = 2000ms
          const card = document.querySelector('[id^="machine-card-"]');
          const grid = document.querySelector('.grid');
          if (card || (grid && grid.children.length > 0)) {
            try {
              runSearchResult();
            } catch (err) {
              console.error("Error running search result client:", err);
            }
            return;
          }
          if (retries >= maxRetries) {
            console.error("Timed out waiting for search page machine cards to appear in DOM.");
            return;
          }
          setTimeout(() => waitForSearchCards(retries + 1), 50);
        })();
      })
      .catch((err) => {
        console.error("Failed to load search_result_page.html", err);
        if (mounted) {
          setHtml("<p style='color:red'>Failed to load page. Check console for details.</p>");
        }
      });

    return () => {
      mounted = false;
      try {
        cleanupSearchResult();
      } catch (err) {
        console.warn("cleanupSearchResult error:", err);
      }
    };
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
