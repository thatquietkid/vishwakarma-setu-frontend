// src/pages/MachineListing.jsx
import React, { useEffect, useState } from "react";
import { runMachineListing, cleanupMachineListing } from "./machineListingClient";

export default function MachineListing() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    let mounted = true;

    fetch("/machine_listing_page.html")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!mounted) return;
        setHtml(text);

        // Wait until the injected HTML is parsed and the #machines-data script element exists.
        // We poll briefly (up to ~2 seconds) and then initialize the client once the element is present.
        (function waitForMachinesData(retries = 0) {
          const maxRetries = 40; // 40 * 50ms = 2000ms total max wait
          const el = document.getElementById("machines-data");
          if (el) {
            try {
              runMachineListing();
            } catch (err) {
              console.error("Error running machine listing client:", err);
            }
            return;
          }
          if (retries >= maxRetries) {
            console.error("Timed out waiting for #machines-data to appear in DOM.");
            return;
          }
          setTimeout(() => waitForMachinesData(retries + 1), 50);
        })();
      })
      .catch((err) => {
        console.error("Failed to load machine_listing_page.html", err);
        if (mounted) {
          setHtml("<p style='color:red'>Failed to load page. Check console for details.</p>");
        }
      });

    return () => {
      mounted = false;
      // remove any listeners attached by the client (prevents duplicates / leaks)
      try {
        cleanupMachineListing();
      } catch (err) {
        // ignore cleanup errors
        console.warn("cleanupMachineListing error:", err);
      }
    };
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
