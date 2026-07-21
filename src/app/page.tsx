import Image from "next/image";
import { AmbientExperience } from "@/components/ambient-experience";
import { VersionSelector } from "@/components/version-selector";

const storyBeats = [
  {
    number: "01",
    label: "Departure",
    title: "Leave home with everything ahead of you.",
    copy: "You and your rival finally come of age, choose your partners, and step into the region with one bright ambition: become Champion.",
  },
  {
    number: "02",
    label: "Momentum",
    title: "Earn your place in a familiar rhythm.",
    copy: "The first badges come cleanly. Rivalries sharpen. A close-knit circle forms—and in an indifferent world, that bond becomes rare.",
  },
  {
    number: "03",
    label: "Upheaval",
    title: "Watch a movement split the region.",
    copy: "Team Bastion makes its move. Admired by many and feared by others, the nationalist force is outlawed—and grows more volatile by the day.",
  },
  {
    number: "04",
    label: "Resistance",
    title: "Choose what you refuse to lose.",
    copy: "The road to the League collides with a civic crisis. Neutrality disappears. Your friends stand together when the safer choice is to scatter.",
  },
  {
    number: "05",
    label: "Unity",
    title: "Face the fracture. Answer the revolt.",
    copy: "Against impossible odds, trainers and partners fight to reunite a wounded region—and decide what kind of future rises after the conflict.",
  },
];

const convictions = [
  {
    number: "01",
    title: "Bonds over indifference",
    copy: "In a region where people keep their distance, friendship becomes a radical kind of strength.",
  },
  {
    number: "02",
    title: "Partners, never weapons",
    copy: "Trainer and Pokémon move as one. Trust—not force—is what carries the group through fear.",
  },
  {
    number: "03",
    title: "Purpose beyond victory",
    copy: "The dream of becoming Champion remains, but the meaning of winning grows much larger.",
  },
  {
    number: "04",
    title: "Faith under pressure",
    copy: "Faith in God gives the group a fixed point when courage alone is no longer enough.",
  },
];

function FractureMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 3 54 17v30L32 61 10 47V17L32 3Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m32 10 6.5 15.5L53 32l-14.5 6.5L32 54l-6.5-15.5L11 32l14.5-6.5L32 10Z"
        fill="currentColor"
        fillOpacity=".13"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m34 10-6 19 7 4-6 21M18 26l10 3M35 33l12 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m7 5 8 5-8 5V5Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <AmbientExperience />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header" aria-label="Primary navigation">
        <a className="site-brand" href="#top" aria-label="Fracture and Revolt home">
          <span className="site-brand__mark">
            <FractureMark />
          </span>
          <span className="site-brand__type">
            <span>Fracture</span>
            <i>&amp;</i>
            <span>Revolt</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main menu">
          <a href="#vision">Vision</a>
          <a href="#story">Story</a>
          <a href="#versions">Versions</a>
          <a href="#world">World</a>
        </nav>

        <a className="header-action" href="#soundtrack">
          <PlayIcon />
          Hear the region
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-atmosphere" aria-hidden="true">
            <span className="hero-atmosphere__blue" />
            <span className="hero-atmosphere__red" />
            <span className="hero-atmosphere__grid" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              An original two-version fan game concept
            </p>
            <h1 id="hero-title">
              The journey you know.
              <span>At the moment everything changes.</span>
            </h1>
            <p className="hero-lede">
              Set out to become Champion in a beautiful modern region—then find
              your closest bonds tested when a controversial movement divides
              its people and forces everyone to choose a future.
            </p>
            <div className="hero-actions">
              <a className="button button--light" href="#vision">
                Enter the story
                <ArrowIcon />
              </a>
              <a className="button button--ghost" href="#versions">
                Choose a version
              </a>
            </div>
          </div>

          <div className="hero-art-wrap" data-reveal>
            <div className="hero-art-frame">
              <Image
                className="hero-art"
                src="/logo.png"
                alt="Key art for Pokémon Fracture and Pokémon Revolt showing a divided civic region: a cool blue city on one side and a warm red capital on the other, split by a glowing fracture."
                fill
                priority
                sizes="(max-width: 900px) 96vw, 92vw"
              />
              <div className="hero-art-sheen" aria-hidden="true" />
              <div className="hero-art-hud hero-art-hud--left">
                <span>PF/R</span>
                <small>Concept key art</small>
              </div>
              <div className="hero-art-hud hero-art-hud--right">
                <span>Two paths</span>
                <small>One shared fate</small>
              </div>
              <span className="frame-corner frame-corner--tl" aria-hidden="true" />
              <span className="frame-corner frame-corner--tr" aria-hidden="true" />
              <span className="frame-corner frame-corner--bl" aria-hidden="true" />
              <span className="frame-corner frame-corner--br" aria-hidden="true" />
            </div>
          </div>

          <div className="hero-footnote">
            <span>Creature-collector RPG</span>
            <span>Political adventure</span>
            <span>Hopeful, not grimdark</span>
          </div>
        </section>

        <section className="vision section-shell" id="vision" aria-labelledby="vision-title">
          <div className="section-index" data-reveal>
            <span>01</span>
            <p>The vision</p>
          </div>

          <div className="vision-heading" data-reveal>
            <p className="eyebrow">A classic foundation</p>
            <h2 id="vision-title">
              Familiar by design.
              <span>Unforgettable by consequence.</span>
            </h2>
          </div>

          <div className="vision-grid">
            <div className="vision-statement" data-reveal>
              <div className="vision-statement__line" aria-hidden="true" />
              <p>
                Fracture &amp; Revolt keeps the rhythm that makes a Pokémon
                journey feel timeless: a hometown departure, a rival at your
                side, partners to raise, badges to earn, and a League to conquer.
              </p>
              <p>
                The evolution is in how that journey is told. As civic tension
                becomes political upheaval, relationships carry real weight and
                the path to Champion becomes a responsibility to something larger.
              </p>
            </div>

            <aside className="thesis-card" data-reveal>
              <span className="thesis-card__label">Creative thesis</span>
              <blockquote>
                “Not a darker Pokémon story.
                <strong>A deeper one.</strong>”
              </blockquote>
              <div className="thesis-card__meta">
                <span>Traditional adventure</span>
                <span>Substantial stakes</span>
              </div>
            </aside>
          </div>

          <div className="vision-principles" data-reveal>
            <article>
              <span>01 / Roots</span>
              <h3>The dream stays intact.</h3>
              <p>Become Champion. Build a team. See the region. Keep moving forward.</p>
            </article>
            <article>
              <span>02 / Stakes</span>
              <h3>The world pushes back.</h3>
              <p>A divided public and a radicalizing faction make every victory mean more.</p>
            </article>
            <article>
              <span>03 / Heart</span>
              <h3>Your people are the power.</h3>
              <p>Friendship, faith, and the bond with Pokémon become the story’s center.</p>
            </article>
          </div>
        </section>

        <section className="versions" id="versions" aria-labelledby="versions-title">
          <div className="versions-heading section-shell" data-reveal>
            <div>
              <p className="eyebrow">One region. Two emotional lenses.</p>
              <h2 id="versions-title">Which future calls to you?</h2>
            </div>
            <p>
              Both versions inhabit the same turning point. Their colors,
              symbols, and atmosphere change how the conflict feels.
            </p>
          </div>
          <VersionSelector />
        </section>

        <section className="story section-shell" id="story" aria-labelledby="story-title">
          <div className="section-index" data-reveal>
            <span>02</span>
            <p>The journey</p>
          </div>

          <div className="story-heading" data-reveal>
            <p className="eyebrow">From first badge to final stand</p>
            <h2 id="story-title">
              The road to Champion
              <span>runs through a region in revolt.</span>
            </h2>
          </div>

          <ol className="story-track">
            {storyBeats.map((beat) => (
              <li key={beat.number} data-reveal>
                <div className="story-track__rail" aria-hidden="true">
                  <span>{beat.number}</span>
                </div>
                <div className="story-track__content">
                  <p>{beat.label}</p>
                  <h3>{beat.title}</h3>
                  <span>{beat.copy}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="bastion" aria-labelledby="bastion-title">
          <div className="bastion-grid" aria-hidden="true" />
          <div className="bastion-banner bastion-banner--one" aria-hidden="true">
            <FractureMark />
          </div>
          <div className="bastion-banner bastion-banner--two" aria-hidden="true">
            <FractureMark />
          </div>

          <div className="bastion-inner section-shell">
            <div className="bastion-dossier" data-reveal>
              <div className="dossier-stamp">
                <span>Regional watch</span>
                <strong>Outlawed</strong>
              </div>
              <div className="dossier-code">
                <span>TB—09</span>
                <span>Threat / escalating</span>
              </div>
              <FractureMark className="dossier-mark" />
              <p>
                Public support
                <span>contested</span>
              </p>
              <p>
                Operating status
                <span>active</span>
              </p>
            </div>

            <div className="bastion-copy" data-reveal>
              <p className="eyebrow">The force at the fault line</p>
              <h2 id="bastion-title">Team Bastion</h2>
              <h3>An idea becomes a movement. A movement becomes a threat.</h3>
              <p>
                Team Bastion is a nationalist military faction with a message
                powerful enough to win real public loyalty. To some, they promise
                strength and direction. To others, they are the clearest danger
                the region has ever faced.
              </p>
              <p>
                When authorities make them outlaws, Bastion does not disappear.
                It radicalizes—turning political tension into an open struggle
                over who the region belongs to and what it should become.
              </p>
              <div className="bastion-note">
                <span>Story function</span>
                <p>Conflict through ideology, symbolism, and consequence—not spectacle alone.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="conviction section-shell" aria-labelledby="conviction-title">
          <div className="conviction-intro" data-reveal>
            <p className="eyebrow">The strength to stand</p>
            <h2 id="conviction-title">
              You do not face it alone.
              <span>You never were meant to.</span>
            </h2>
            <p>
              The region may be indifferent, but your circle is not. A rival,
              trusted friends, and beloved Pokémon choose one another again and
              again—even when doing so means facing near-certain defeat.
            </p>
          </div>

          <div className="conviction-list">
            {convictions.map((item) => (
              <article key={item.number} data-reveal>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <FractureMark />
              </article>
            ))}
          </div>
        </section>

        <section className="world" id="world" aria-labelledby="world-title">
          <div className="world-image" data-reveal>
            <Image
              src="/logo.png"
              alt="A stylized civic capital at golden hour with banners, public squares, stone architecture, gardens, and a glowing fracture dividing cool and warm city districts."
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <div className="world-image__overlay" />
            <div className="world-image__caption">
              <span>Art direction / 001</span>
              <p>A beautiful region caught in a historic turning point.</p>
            </div>
          </div>

          <div className="world-copy" data-reveal>
            <p className="eyebrow">Beauty at the breaking point</p>
            <h2 id="world-title">Wounded.<br />Never hopeless.</h2>
            <p>
              A polished 3D civic adventure of train lines, plazas, clock towers,
              public gardens, scaffolding, murals, and mountain skylines. The
              conflict lives in the details: a torn banner, a repaired road, a
              public square deciding what it believes.
            </p>

            <ul className="world-rules">
              <li>
                <span>01</span>
                <div>
                  <strong>Political through symbolism</strong>
                  <p>Banners, signs, barricades, and civic architecture tell the story before dialogue does.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Modern, but timeless</strong>
                  <p>Clean regional capitals and rail towns—never cyberpunk, medieval, or apocalyptic.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Light as a promise</strong>
                  <p>Golden sun breaks through dramatic clouds: trouble is here, but so is a future.</p>
                </div>
              </li>
            </ul>

            <div className="palette" aria-label="Version color palettes">
              <div>
                <span style={{ background: "#7697e8" }} />
                <span style={{ background: "#d5e2ff" }} />
                <span style={{ background: "#a759ff" }} />
                <small>Fracture / order &amp; repair</small>
              </div>
              <div>
                <span style={{ background: "#c33228" }} />
                <span style={{ background: "#f0ad52" }} />
                <span style={{ background: "#f6e5c3" }} />
                <small>Revolt / voice &amp; reform</small>
              </div>
            </div>
          </div>
        </section>

        <section className="soundtrack section-shell" id="soundtrack" aria-labelledby="soundtrack-title">
          <div className="soundtrack-copy" data-reveal>
            <div className="soundtrack-kicker">
              <span className="soundtrack-kicker__icon"><PlayIcon /></span>
              <span>Original musical direction</span>
            </div>
            <h2 id="soundtrack-title">Hear the pressure building.</h2>
            <p>
              Civic grandeur, martial tension, intimate resolve. The soundtrack
              carries the region from the optimism of departure to the urgency
              of a public uprising.
            </p>
            <a
              className="text-link"
              href="https://www.youtube.com/playlist?list=PLTim7FAPEyh8"
              target="_blank"
              rel="noreferrer"
            >
              Open the full playlist
              <ArrowIcon />
            </a>
            <div className="equalizer" aria-hidden="true">
              {Array.from({ length: 28 }, (_, index) => (
                <span key={index} style={{ "--bar": index } as React.CSSProperties} />
              ))}
            </div>
          </div>

          <div className="soundtrack-player" data-reveal>
            <div className="soundtrack-player__topline">
              <span>PF/R Audio Archive</span>
              <span>Playlist 01</span>
            </div>
            <div className="soundtrack-player__embed">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PLTim7FAPEyh8"
                title="Pokémon Fracture and Revolt soundtrack playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="systems section-shell" aria-labelledby="systems-title">
          <div className="systems-card" data-reveal>
            <div className="systems-card__grid" aria-hidden="true" />
            <div className="systems-card__index">03 / Beyond the campaign</div>
            <div className="systems-card__copy">
              <p className="eyebrow">A future systems layer</p>
              <h2 id="systems-title">The world behind the world.</h2>
              <p>
                <strong>Poke Economy</strong> explores the larger backend vision:
                the systems, exchange, and living regional economy that could one
                day make this adventure feel bigger than a single route to the League.
              </p>
              <a
                className="button button--dark"
                href="https://blog.anthonycavuoti.com/posts/project-poke-economy/"
                target="_blank"
                rel="noreferrer"
              >
                Read the project note
                <ArrowIcon />
              </a>
            </div>
            <div className="systems-orbit" aria-hidden="true">
              <div className="systems-orbit__ring systems-orbit__ring--outer" />
              <div className="systems-orbit__ring systems-orbit__ring--inner" />
              <FractureMark />
              <span className="systems-orbit__node systems-orbit__node--one" />
              <span className="systems-orbit__node systems-orbit__node--two" />
              <span className="systems-orbit__node systems-orbit__node--three" />
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="closing-light closing-light--blue" aria-hidden="true" />
          <div className="closing-light closing-light--red" aria-hidden="true" />
          <div className="closing-crack" aria-hidden="true" />
          <div className="closing-content" data-reveal>
            <FractureMark />
            <p className="eyebrow">The region is waiting</p>
            <h2 id="closing-title">
              Fracture reveals the divide.
              <span>Revolt decides what comes next.</span>
            </h2>
            <p>
              Become Champion. Stand by your people. Help a beautiful region
              remember that its future still belongs to everyone.
            </p>
            <a className="button button--light" href="#top">
              Return to the beginning
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <FractureMark />
          <div>
            <strong>Pokémon Fracture &amp; Revolt</strong>
            <span>An independent fan game concept</span>
          </div>
        </div>
        <p>
          Pokémon and related trademarks belong to Nintendo, Game Freak, and The
          Pokémon Company. This non-commercial concept is not affiliated with or
          endorsed by those companies.
        </p>
        <div className="site-footer__links">
          <a href="#vision">Vision</a>
          <a href="#story">Story</a>
          <a href="#soundtrack">Music</a>
        </div>
      </footer>
    </>
  );
}
