# MUBAS Year 5 Web Services: Engineering Decision Log
**Project:** Portfolio Infrastructure Build  
**Developer:** Doreen Providence Abel  

---

### [Entry 1 — 2026-09-15] Core Architectural Framework
* **Decision:** Selected pure Native Semantic HTML5 and Vanilla ECMAScript (JavaScript) instead of utilizing external rendering frameworks like React or Vue.
* **Rationale:** Maximizes execution speed, minimizes external node dependencies, and adheres strictly to the fundamental lightweight project criteria outlined in the course manual.

### [Entry 2 — 2026-09-15] Design Layout Paradigm
* **Decision:** Implemented a strict 12-column stretch grid configuration for desktop viewports and a collapsible 4-column framework for mobile frames.
* **Rationale:** Establishes cross-viewport scaling rules that ensure clean visual parity between desktop dashboard displays and narrow phone layouts.

### [Entry 3 — 2026-09-16] Color Space Engineering
* **Decision:** Configured a custom WCAG AA-compliant purple color palette using raw CSS variables inside the global `:root` selector node.
* **Rationale:** centralizes theme design management, enabling instant layout color switches without forcing raw script modifications.

### [Entry 4 — 2026-09-16] Native Asynchronous State Management
* **Decision:** Utilized the JavaScript native `async/await` fetch engine API over XMLHttpRequests to bridge data loops from public cloud servers.
* **Rationale:** Simplifies promise-handling logic paths and provides predictable execution trees during live repository pipeline processing.

### [Entry 5 — 2026-09-17] Responsive Grid Conversions
* **Decision:** Applied CSS Grid properties (`repeat(3, 1fr)`) for desktop project cards, configured to switch automatically to a vertical flex-stack layout on smaller screens.
* **Rationale:** Eliminates layout clipping anomalies on compact mobile displays, aligning text elements directly with the mobile design wireframes.

### [Entry 6 — 2026-09-17] Automated Layout Validation Rules
* **Decision:** Bounded contact form input verification to execution blocks using JavaScript `preventDefault()` and string trimming validation metrics.
* **Rationale:** Prevents empty layout data submissions from forcing erratic webpage reloads before client fields are checked.

### [Entry 7 — 2026-09-18] Page Routing Fallbacks
* **Decision:** Deployed an isolated standalone `404.html` component layer targeted specifically to handle broken URL server requests on GitHub Pages.
* **Rationale:** Guarantees proper error handling if a custom or invalid directory route is loaded, keeping the user in a safe browsing environment.

### [Entry 8 — 2026-09-19] Version Deployment Strategy
* **Decision:** Structured development across isolated functional Git branches (`feat-design-css`, `feat-api-js`) before execution-testing and merging into the stable main branch.
* **Rationale:** Creates a clear history timeline that meets the project's tracking criteria, proving the progression from layout design to implementation.
