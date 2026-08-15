# Al-Madina Cooking Center — Design Direction

## Three stylistic approaches

### Theme Name: Saffron Editorial Hearth
Very Brief Intro: A warm, premium food editorial that pairs a quiet cream canvas with espresso typography, saffron accents, and generous asymmetric composition. It should feel like a trusted family kitchen translated into a polished contemporary brand.
Probability: 0.07

### Theme Name: Mediterranean Workshop
Very Brief Intro: A tactile, sun-washed direction built around terracotta, olive, hand-drawn marks, and modular recipe-card structures. It makes the brand feel artisanal, local, and hands-on without becoming rustic or nostalgic.
Probability: 0.04

### Theme Name: Midnight Spice Lounge
Very Brief Intro: A dramatic low-light hospitality direction with deep ink surfaces, brass details, and close-up food photography. It creates a more exclusive evening-event mood while keeping the service message direct.
Probability: 0.02

## Selected approach: Saffron Editorial Hearth

### Design Movement
Contemporary editorial hospitality design with references to independent food magazines, quiet luxury packaging, and modern Mediterranean interiors.

### Core Principles
1. **Warmth through restraint:** Cream, espresso, and saffron should feel composed rather than decorative.
2. **Editorial rhythm:** Large headlines, deliberate line breaks, pull quotes, and asymmetrical blocks will guide scanning.
3. **Proof through detail:** Menus, service cards, process notes, and contact information should make AMC feel organized and dependable.
4. **Hospitality without clutter:** Every CTA should make the next action obvious, especially the WhatsApp quotation path.

### Color Philosophy
The base is a soft parchment cream to evoke a clean tablecloth and printed menu stock. Espresso ink provides dependable reading contrast and a grounded, culinary tone. Saffron ember is the ownable brand accent: warm enough to signal food and celebration, but muted enough to feel premium. Olive leaf is used sparingly for freshness and to keep the palette from becoming monochromatic. Avoid purple gradients, bright neon, and generic blue SaaS styling.

### Layout Paradigm
Use a magazine-like vertical composition instead of a repeated centered grid. The hero should split into a text column and a framed food image, then the content should alternate between offset copy, full-bleed visual moments, narrow labels, and low-density card rows. On mobile, preserve the editorial hierarchy by keeping the eyebrow labels and strong typographic scale rather than shrinking everything into dense stacks.

### Signature Elements
1. Small uppercase section markers with a thin saffron rule, used as navigation cues.
2. A recurring arched image frame inspired by a serving window, paired with subtle paper texture.
3. Thin olive divider lines and hand-drawn-style circular seals used as quiet wayfinding motifs.

### Interaction Philosophy
Interactions should feel like turning a well-made menu page: direct, tactile, and calm. Buttons should press with a compact physical response; filter chips should clearly show the active category; gallery images should enlarge without losing the surrounding context; the WhatsApp flow should explain exactly what happens before the visitor leaves the site.

### Animation
Use short, low-amplitude reveals with a 180–260ms ease-out, staggered by 40–60ms for grouped cards. Images may lift 3–6px on hover and reveal a warm overlay, while buttons should scale to 0.97 on press. The mobile navigation should slide from the top with opacity and transform only. No looping decorative motion, no parallax that competes with food imagery, and all non-essential motion must be disabled under `prefers-reduced-motion: reduce`.

### Typography System
Use **Cormorant Garamond** for display headlines, menu names, and editorial pull quotes; use **DM Sans** for body copy, navigation, labels, and form controls. Headlines should be high-contrast and occasionally italicized for hospitality warmth. Body text should stay between 15–18px with comfortable line height. Uppercase labels should use generous letter spacing and never carry long sentences.

### Brand Essence
**Positioning:** Al-Madina Cooking Center is the dependable event-catering partner for hosts who want generous food, thoughtful preparation, and a professional experience without losing the warmth of a shared table.

**Personality:** Generous, composed, welcoming.

### Brand Voice
Headlines should sound assured and sensory without overpromising. CTAs should be active and specific. Microcopy should remove uncertainty, especially around the WhatsApp handoff: the site prepares the message and the customer presses Send.

Example headline: **Food that gives the occasion its moment.**

Example CTA microcopy: **Your request is ready in WhatsApp — review it, then press Send to reach AMC.**

### Wordmark & Logo
Use a bold graphic symbol without text: three saffron petals rising from a shallow serving bowl, enclosed by a slightly open arch. The mark should work as a compact stamp in the header and favicon, with a simple two-tone version for small sizes. The wordmark should be set separately in a refined serif/sans pairing and should never rely on a default browser font.

### Signature Brand Color
**Saffron Ember — `#D48A3A`**. This is the recognizable accent for CTA fills, active menu states, rules, and small brand seals.

## Content and implementation decisions

The website will remain frontend-only and use plain React-free browser interactions within the scaffold's client entrypoint, with semantic HTML structure, vanilla-style event logic where appropriate, and no WhatsApp API credentials. The only WhatsApp action is a `wa.me` click-to-chat URL using the customer-entered form values encoded with `encodeURIComponent`.

The supplied AMC WhatsApp number will be normalized to `03224494722` for the click-to-chat link. The UI will never claim that a message was sent; it will say that the quotation is prepared and that the visitor must review and press Send in WhatsApp. Unprovided business details such as email, physical address, and operating hours will be represented honestly as details to confirm rather than invented facts.

No customer reviews, ratings, testimonials, or fabricated user-generated content will appear anywhere in the experience.

## Style Decisions

The hero is treated as a parchment editorial spread first and a food photograph second, using a saffron arched frame on desktop and a dark full-bleed treatment only at small mobile widths where the split composition would compromise legibility.

The arched serving-window frame and circular AMC seal are recurring motifs. The seal appears in the About image, the mid-page feature band, and the contact area, while the mark remains visible in the header and footer.

Repeated service and menu structures are interrupted by offset cards, a pull-quote strip, a full-bleed editorial image band, narrow labels, and asymmetrical section spacing.
