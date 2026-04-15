const fs = require('fs');
let html = fs.readFileSync('app.html', 'utf8');

html = html.replace(`    <!-- Global Header Banner (Dynamic Island) -->
    <div class="app-header-banner">
        <div class="header-top-row">
            <div class="header-left"></div>
            <div class="header-title">Dates</div>
            <div class="header-actions">
                <button class="nav-btn" onclick="openAddModal()" aria-label="Add Date">
                    <img src="add.svg" alt="Add">
                </button>
                <button class="nav-btn" onclick="signOut()" aria-label="Sign Out">
                    <img src="exit.svg" alt="Log Out">
                </button>
            </div>
        </div>
        <div class="header-bottom-row">
            <div class="segmented-control glass-segment" style="margin: 0;">
                <button id="segList" class="segment-btn active" onclick="setMode('list')" aria-label="List View">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                </button>
                <button id="segGrid" class="segment-btn" onclick="setMode('grid')" aria-label="Card View">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </button>
            </div>
        </div>
    </div>`, `    <!-- Global Header Banner -->
    <div class="app-header-banner">
        <div class="header-left"></div>
        <div class="header-title">Dates</div>
        <div class="header-actions">
            <button class="nav-btn" onclick="signOut()" aria-label="Sign Out">
                <img src="exit.svg" alt="Log Out">
            </button>
        </div>
    </div>`);

html = html.replace(`    <!-- Bottom Navigation -->
    <div class="bottom-nav">
        <button class="nav-tab active" id="tabDates" onclick="switchTab('dates')">Dates</button>
        <button class="nav-tab" id="tabStats" onclick="switchTab('stats')">Stats</button>
    </div>`, `    <!-- Bottom Navigation -->
    <div class="bottom-nav">
        <button class="nav-tab active" id="tabDates" onclick="switchTab('dates')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; vertical-align:middle; margin-top:-2px;">
                <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            Dates
        </button>
        <button class="nav-tab action-add" onclick="openAddModal()" style="background: var(--ios-blue); color: white; border-radius: 50%; width: 44px; height: 44px; padding: 0; display: flex; align-items: center; justify-content: center; margin: 0 4px; box-shadow: 0 4px 12px rgba(10, 132, 255, 0.4);">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
        <button class="nav-tab" id="tabStats" onclick="switchTab('stats')">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; vertical-align:middle; margin-top:-2px;">
                <path d="M12 20V10"></path>
                <path d="M18 20V4"></path>
                <path d="M6 20v-4"></path>
            </svg>
            Stats
        </button>
    </div>`);

fs.writeFileSync('app.html', html);
