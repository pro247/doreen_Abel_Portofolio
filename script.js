
document.addEventListener('DOMContentLoaded', () => {

    // A. MOBILE HAMBURGER NAVIGATION MOBILE DRAWER INTERACTION

    const hamburgerTrigger = document.getElementById('hamburger-trigger');
    const navLinksContainer = document.querySelector('.nav-links');

    if (hamburgerTrigger && navLinksContainer) {
        hamburgerTrigger.addEventListener('click', () => {
            // Toggles the custom active state class rule to slide menu items down
            navLinksContainer.classList.toggle('active');

            // Subtle accessible icon state shift interaction feedback loop
            if (navLinksContainer.classList.contains('active')) {
                hamburgerTrigger.textContent = '✕'; // Swaps icon to close cross graphic mark
            } else {
                hamburgerTrigger.textContent = '☰'; // Restores layout baseline icon
            }
        });

        // Autoclose navigation drawer layout panel if a link item node is clicked
        const individualLinks = navLinksContainer.querySelectorAll('a');
        individualLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                hamburgerTrigger.textContent = '☰';
            });
        });
    }


    // B. VECTOR PILL SLIDER THEME SWITCH ENGINE (Dynamic State Variable Manager)

    const themeToggleBtn = document.getElementById('theme-toggle');
    const cachedPreference = localStorage.getItem('theme') || 'light';

    // Inject attribute data states immediately onto the HTML root block on boot
    document.documentElement.setAttribute('data-theme', cachedPreference);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentActiveState = document.documentElement.getAttribute('data-theme');
            const targetState = currentActiveState === 'light' ? 'dark' : 'light';

            // Core engine switches root variables; CSS selectors handle shifting animations automatically
            document.documentElement.setAttribute('data-theme', targetState);
            localStorage.setItem('theme', targetState);
        });
    }

    // C. ASYNCHRONOUS DATA ACQUISITION LOOP (Dynamic Cloud API Stream Handler)

    // ==========================================================================
    // C. ASYNCHRONOUS DATA ACQUISITION LOOP (Dynamic Cloud API Stream Handler)
    // ==========================================================================
    // ==========================================================================
    // C. ASYNCHRONOUS DATA ACQUISITION LOOP (Dynamic Cloud API Stream Handler)
    // ==========================================================================
    const targetRepoGrid = document.getElementById('repo-container');

    async function streamCloudRepositoryData() {
        if (!targetRepoGrid) return; // Breaks loop gracefully if loading alternative text pages

        try {
            // Absolute URL endpoint handshake ignores relative directory issues on live hosting servers
            const endpointStream = await fetch("https://github.com");

            if (!endpointStream.ok) {
                throw new Error('Cloud signal validation failure structural exception.');
            }

            const datasets = await endpointStream.json();
            targetRepoGrid.innerHTML = ''; // Flushes loading state cards safely

            if (datasets.length === 0) {
                targetRepoGrid.innerHTML = `
                    <div class="loading-state-card">
                        <p>📦 Zero open public repository assets linked to this account directory node.</p>
                    </div>`;
                return;
            }

            // Injects responsive cloud repo cards into the live DOM list stream dynamically
            datasets.forEach(repo => {
                const repositoryCardNode = document.createElement('article');
                repositoryCardNode.className = 'project-card';

                const verifiedDescriptionText = repo.description ? repo.description : 'Active code layout framework deployed without static descriptive summary tags.';

                repositoryCardNode.innerHTML = `
                    <span class="card-domain">GITHUB DYNAMIC FORK</span>
                    <h3>${repo.name}</h3>
                    <p class="card-desc">${verifiedDescriptionText}</p>
                    <div class="tech-badge-container">
                        <span class="tech-tag">⭐ Stars: ${repo.stargazers_count}</span>
                        <span class="tech-tag">${repo.language || 'Config Scripts'}</span>
                        <a href="${repo.html_url}" target="_blank" class="tech-tag" style="color: var(--color-accent); font-weight: 700; text-decoration: underline;">Source Branch ↗</a>
                    </div>
                `;
                targetRepoGrid.appendChild(repositoryCardNode);
            });

        } catch (faultException) {
            console.error('API Stream Processing Exception:', faultException);
            targetRepoGrid.innerHTML = `
                <div class="loading-state-card" style="border-color: #E53E3E; background-color: rgba(229, 62, 62, 0.02); padding: 2rem; border-radius: var(--radius); text-align: center;">
                    <p style="color: #E53E3E; font-weight: 700;">❌ Operational Route Interrupted: Failed to link server array nodes securely from GitHub.</p>
                </div>`;
        }
    }

    // Direct invocation command runs live cloud integration updates automatically
    streamCloudRepositoryData();


    // ==========================================================================
    // D. SECURE FIELD SUBMISSION INTERCEPT (Contact Form Validation Logic)
    // ==========================================================================
    const interactionForm = document.getElementById('portfolio-contact-form');

    if (interactionForm) {
        interactionForm.addEventListener('submit', (eventBlock) => {
            eventBlock.preventDefault(); // Curbs default browser refresh vectors safely

            const fieldFirst = document.getElementById('first-name').value.trim();
            const fieldLast = document.getElementById('last-name').value.trim();
            const fieldMail = document.getElementById('user-email').value.trim();
            const fieldText = document.getElementById('message-box').value.trim();

            if (!fieldFirst || !fieldLast || !fieldMail || !fieldText) {
                alert('Validation Fault: Mandatory inputs cannot be passed with empty fields.');
                return;
            }

            alert(`⚡ Signal Locked! Communication loop logged from client node: "${fieldFirst} ${fieldLast}". Transmission simulation complete.`);
            interactionForm.reset(); // Restores placeholder properties safely
        });
    }
});
