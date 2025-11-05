// Simple mobile nav toggle used by `views/partials/navbar.ejs`
document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('nav-toggle');
	var menu = document.getElementById('nav-menu');
	// panel elements are used to decide behavior on small screens
	var navPanel = document.getElementById('nav-panel');
	var navOverlay = document.getElementById('nav-overlay');
	var navClose = document.getElementById('nav-close');
	var majorToggleMobile = document.getElementById('major-toggle-mobile');
	var majorSubMobile = document.getElementById('major-submenu-mobile');
	if (!btn || !menu) return;

	btn.addEventListener('click', function () {
		var expanded = btn.getAttribute('aria-expanded') === 'true';
		// if there's an off-canvas panel and we're on small viewport, open the panel instead
		if (navPanel && typeof window !== 'undefined' && window.innerWidth < 768) {
			if (typeof openPanel === 'function') openPanel();
			btn.setAttribute('aria-expanded', 'true');
			return;
		}
		// fallback: toggle inline menu (used on larger viewports)
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden');
		} else {
			menu.classList.add('hidden');
		}
		btn.setAttribute('aria-expanded', (!expanded).toString());
	});
	
	// MAJOR submenu toggle (mobile)
	var majorBtn = document.getElementById('major-toggle');
	var majorSub = document.getElementById('major-submenu');
	var majorDropdown = document.getElementById('major-dropdown');
	if (majorBtn && majorSub) {
		majorBtn.addEventListener('click', function (e) {
			e.preventDefault();
			var expanded = majorBtn.getAttribute('aria-expanded') === 'true';
			// toggle mobile submenu visibility
			if (majorSub.classList.contains('hidden')) {
				majorSub.classList.remove('hidden');
			} else {
				majorSub.classList.add('hidden');
			}
			majorBtn.setAttribute('aria-expanded', (!expanded).toString());

			// rotate chevron for visual feedback
			var svg = majorBtn.querySelector('svg');
			if (svg) {
				svg.classList.toggle('rotate-180');
			}

			// On desktop sizes, also toggle the absolute dropdown for users who want click-to-open
			if (majorDropdown) {
				var isHidden = majorDropdown.classList.contains('hidden');
				if (isHidden) {
					majorDropdown.classList.remove('hidden');
					majorDropdown.classList.remove('md:invisible');
					majorDropdown.setAttribute('aria-hidden', 'false');
				} else {
					majorDropdown.classList.add('hidden');
					majorDropdown.classList.add('md:invisible');
					majorDropdown.setAttribute('aria-hidden', 'true');
				}

				// click outside to close desktop dropdown
				document.addEventListener('click', function docClose(e) {
					var target = e.target;
					if (!majorDropdown.contains(target) && !majorBtn.contains(target)) {
						majorDropdown.classList.add('hidden');
						majorDropdown.classList.add('md:invisible');
						majorDropdown.setAttribute('aria-hidden', 'true');
						// remove this listener after closing
						document.removeEventListener('click', docClose);
					}
				});
			}
		});
	}

	// Off-canvas mobile panel handlers
	var navPanel = document.getElementById('nav-panel');
	var navOverlay = document.getElementById('nav-overlay');
	var navClose = document.getElementById('nav-close');
	var majorToggleMobile = document.getElementById('major-toggle-mobile');
	var majorSubMobile = document.getElementById('major-submenu-mobile');

	function openPanel() {
		if (navPanel) navPanel.classList.remove('-translate-x-full');
		if (navOverlay) navOverlay.classList.remove('hidden');
		// hide the inline menu (prevent old menu from showing)
		if (menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
		// add body class so styles can hide other header elements if needed
		if (document && document.body) document.body.classList.add('nav-panel-open');
	}

	function closePanel() {
		if (navPanel) navPanel.classList.add('-translate-x-full');
		if (navOverlay) navOverlay.classList.add('hidden');
		// ensure mobile major submenu is closed
		if (majorSubMobile) majorSubMobile.classList.add('hidden');
		if (majorToggleMobile) majorToggleMobile.setAttribute('aria-expanded', 'false');
		if (document && document.body) document.body.classList.remove('nav-panel-open');
	}

	// (Hamburger behavior handled earlier - on small screens it opens panel; on large screens it toggles inline menu)

	if (navClose) {
		navClose.addEventListener('click', function () {
			closePanel();
			if (btn) btn.setAttribute('aria-expanded', 'false');
		});
	}

	if (navOverlay) {
		navOverlay.addEventListener('click', function () {
			closePanel();
			if (btn) btn.setAttribute('aria-expanded', 'false');
		});
	}

	// close on ESC
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			closePanel();
			if (btn) btn.setAttribute('aria-expanded', 'false');
		}
	});

	// mobile major submenu inside panel
	if (majorToggleMobile && majorSubMobile) {
		majorToggleMobile.addEventListener('click', function () {
			var expanded = majorToggleMobile.getAttribute('aria-expanded') === 'true';
			if (majorSubMobile.classList.contains('hidden')) {
				majorSubMobile.classList.remove('hidden');
			} else {
				majorSubMobile.classList.add('hidden');
			}
			majorToggleMobile.setAttribute('aria-expanded', (!expanded).toString());
			var svg = majorToggleMobile.querySelector('svg');
			if (svg) svg.classList.toggle('rotate-180');
		});
	}
});


