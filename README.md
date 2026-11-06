# The Unhinged Internet

A fictional internet packed with absurd websites, strange organizations, mini-games, and questionable decisions.

**Live site:** https://shreebalaji767.github.io/the-unhinged-internet/

## What's included

- **Home portal** — the gateway to the fictional internet.
- **Explore** — browse and live-search the universe's districts and planned destinations.
- **Tiny Arcade** — play the timed Crumb Catcher mini-game, trigger random chaos events, and use portal roulette.
- **Interactive borough map** — click buildings to travel and search for hidden objects.
- **Questionable Pets** — adopt companions and choose which one follows you.
- **Crumb Cup** — compete in a three-round timed arcade tournament.
- **NPC memory and random encounters** — recurring characters remember prior dialogue choices; surprise encounters award items and rewards.
- **Seasonal world atmosphere** — in-game days rotate through four absurd seasons and changing weather.
- **World Hub** — view shared world status, recurring characters, and the daily anomaly event.
- **Mystery storyline** — investigate the cross-site Case of the Missing Crumb and collect clues from three existing websites.
- **Secret websites** — unlock the Digital Backrooms and Potato Moon Forum through exploration and NPC relationships.
- **NPC relationships** — build trust with recurring characters through dialogue choices.
- **Quest Board** — complete cross-site objectives and claim shared coin and XP rewards.
- **Questionable Shop** — spend earned coins on collectibles, tools and wearable items.
- **Local Bazaar** — sell inventory items for coins through a simple player economy.
- **Character Jobs** — complete relationship- and mystery-based requests for unique item, coin and XP rewards.
- **NPC Life** — meet characters and choose from five dialogue responses.
- **PigeonBook** — publish silly posts to a locally saved fictional social feed.
- **Ministry of Useless Affairs** — apply for completely unnecessary permits.
- **Fake Internet 1999** — explore simulated retro web pages.
- **Player profile** — keep a display name, coins, experience, reputation, inventory, and achievements.
- **Shared progression** — NPC conversations, posts, permits, work shifts, and unique destinations contribute to common quest progress.
- **Local save and backup** — progress is saved in the current browser and can be exported as JSON.

## Technology

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage for player progress
- Service Worker for basic offline caching
- GitHub Pages for free static hosting

No framework, backend, database server, paid API, subscription, or advertising network is required.

## Run locally

1. Clone or download this repository.
2. Open `index.html` in a browser.

For service-worker and offline testing, serve the folder through a local static HTTP server. Service workers do not run reliably from a `file://` URL.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Open **Settings → Pages** in the GitHub repository.
2. Set the deployment source to **GitHub Actions**.
3. Push changes to the `main` branch, or run the workflow manually from the **Actions** tab.
4. After a successful deployment, visit the live site linked above.

## Saving and privacy

Player progress is stored in LocalStorage in the browser being used. It does not automatically sync between browsers or devices. Use **Export save file** in the player profile to keep a backup before clearing browser data.

The social feed and all characters are fictional. PigeonBook posts are stored locally and are not published to a shared online service.

## Project status

The project is an expanding interconnected universe. Its shared progression engine links websites through quests, daily events, currency, XP, inventory, achievements, character relationships, mystery clues, unlockable secret destinations, shop purchases, bazaar sales, character-specific jobs, arcade scores, and random-event rewards. All progress remains local to the browser; this is a single-player simulation, not online multiplayer. New districts, websites, characters, and events can be added incrementally while keeping the project static and GitHub Pages compatible.

## License

No license has been specified yet.