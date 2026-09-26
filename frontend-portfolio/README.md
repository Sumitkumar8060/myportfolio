# Sumit Kumar — Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS.
B.Tech Computer Science & Engineering student (Lovely Professional University)
focused on backend development, cloud computing, and DevOps.

## Tech Stack

* **React** – Component-based UI
* **Vite** – Build tool / dev server
* **Tailwind CSS** – Styling
* **Lucide Icons** – Icon set
* **Radix UI** – Accessible toast component

## Sections

* Hero
* About
* Skills (filterable by category)
* My Journey (Education / Certifications / Coding Practice)
* Projects
* Contact

## Quick Start

```bash
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Content

Personal, skills, project, education, and certification content lives in
`src/data/`. Update the files there to change what's shown on the site:

* `src/data/personal.js` — name, tagline, contact info, social links, resume
* `src/data/skills.js` — technical skills by category
* `src/data/projects.js` — project cards
* `src/data/education.js` — education history
* `src/data/certifications.js` — certifications/courses
* `src/data/journey.js` — coding practice stats (LeetCode, etc.)

Several fields (email, social links, resume, project links, credential URLs)
are left as clear `TODO` placeholders where real information wasn't
available yet.
