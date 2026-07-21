"use client";

import Image from "next/image";
import { useState } from "react";

const versions = {
  fracture: {
    eyebrow: "FR—01 / The divided path",
    title: "Hold what can be repaired.",
    copy: "Cool stone, silver light, and violet fractures frame a region searching for order. Fracture asks what is worth preserving—and whether unity can exist without confronting the lines beneath it.",
    motifs: ["Division", "Balance", "Repair"],
    position: "left center",
  },
  revolt: {
    eyebrow: "RV—02 / The rising path",
    title: "Change what can no longer stand.",
    copy: "Gold sunlight, red banners, and crowded civic squares give the region a louder pulse. Revolt asks who gets heard, what reform demands, and when public energy becomes impossible to contain.",
    motifs: ["Voice", "Movement", "Reform"],
    position: "right center",
  },
} as const;

type VersionKey = keyof typeof versions;

function VersionGlyph({ version }: { version: VersionKey }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 3 43 14v20L24 45 5 34V14L24 3Z" stroke="currentColor" strokeWidth="1.5" />
      {version === "fracture" ? (
        <path d="m26 8-6 15 6 3-7 15M9 21l11 2M26 26l13 8" stroke="currentColor" strokeWidth="2.5" />
      ) : (
        <path d="M15 32V18m9 14V12m9 20V16M11 32h26M24 7l4 5h-8l4-5Z" stroke="currentColor" strokeWidth="2.5" />
      )}
    </svg>
  );
}

export function VersionSelector() {
  const [activeVersion, setActiveVersion] = useState<VersionKey>("fracture");
  const active = versions[activeVersion];

  return (
    <div className="version-experience" data-version={activeVersion} data-reveal>
      <div className="version-experience__image">
        <Image
          src="/logo.png"
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 56vw"
          style={{ objectPosition: active.position }}
        />
        <div className="version-experience__image-filter" aria-hidden="true" />
        <div className="version-experience__locator">
          <span>Version atmosphere</span>
          <strong>{activeVersion === "fracture" ? "West district" : "Capital district"}</strong>
        </div>
      </div>

      <div className="version-experience__panel">
        <div className="version-tabs" role="group" aria-label="Choose a version to explore">
          {(Object.keys(versions) as VersionKey[]).map((version) => (
            <button
              type="button"
              key={version}
              className={activeVersion === version ? "is-active" : ""}
              aria-pressed={activeVersion === version}
              onClick={() => setActiveVersion(version)}
            >
              <VersionGlyph version={version} />
              <span>
                <small>Pokémon</small>
                <strong>{version}</strong>
              </span>
            </button>
          ))}
        </div>

        <div className="version-content" key={activeVersion}>
          <p className="version-content__eyebrow">{active.eyebrow}</p>
          <VersionGlyph version={activeVersion} />
          <h3>{active.title}</h3>
          <p>{active.copy}</p>
          <ul>
            {active.motifs.map((motif, index) => (
              <li key={motif}>
                <span>0{index + 1}</span>
                {motif}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
