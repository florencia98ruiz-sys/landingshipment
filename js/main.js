/* ── Mobile menu ── */
        function toggleMenu() {
            document.getElementById('mobile-menu').classList.toggle('open');
            document.getElementById('menu-overlay').classList.toggle('open');
        }
        function closeMenu() {
            document.getElementById('mobile-menu').classList.remove('open');
            document.getElementById('menu-overlay').classList.remove('open');
        }

        /* ── FAQ accordion ── */
        document.querySelectorAll('.faq-q').forEach(btn => {
            btn.addEventListener('click', () => {
                const answer = btn.nextElementSibling;
                const isOpen = btn.getAttribute('aria-expanded') === 'true';
                document.querySelectorAll('.faq-q').forEach(b => {
                    b.setAttribute('aria-expanded', 'false');
                    b.nextElementSibling.classList.remove('open');
                });
                if (!isOpen) {
                    btn.setAttribute('aria-expanded', 'true');
                    answer.classList.add('open');
                }
            });
        });

        /* ── Count-up (REPLAY cada vez que entra al viewport) ── */
        let statsTimers = [];

        function resetStats() {
            statsTimers.forEach(clearInterval);
            statsTimers = [];
            document.querySelectorAll('[data-target]').forEach(el => {
                el.textContent = '0';
            });
        }

        function runCountUp() {
            resetStats();
            document.querySelectorAll('[data-target]').forEach(el => {
                const target = parseInt(el.dataset.target, 10);
                const prefix = target >= 50 ? '+' : '';
                const duration = 1600;
                const step = target / (duration / 16);
                let current = 0;
                const timer = setInterval(() => {
                    current = Math.min(current + step, target);
                    el.textContent = prefix + Math.floor(current);
                    if (current >= target) clearInterval(timer);
                }, 16);
                statsTimers.push(timer);
            });
        }

        const statsObserver = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    runCountUp();
                } else {
                    resetStats();
                }
            });
        }, { threshold: 0.5 });

        const statsBar = document.querySelector('.stats-bar');
        if (statsBar) statsObserver.observe(statsBar);

        /* ── Truck journey (REPLAY cada vez que entra al viewport) ── */
        let journeyTimers = [];

        function resetJourney() {
            journeyTimers.forEach(clearTimeout);
            journeyTimers = [];
            const truck = document.getElementById('journey-truck');
            const stops = document.querySelectorAll('.jstop');
            if (truck) {
                truck.style.transition = 'none';
                truck.classList.remove('drive');
                truck.offsetHeight; // force reflow
                truck.style.transition = '';
            }
            stops.forEach(s => s.classList.remove('active'));
        }

        function runJourney() {
            resetJourney();
            const truck = document.getElementById('journey-truck');
            const stops = document.querySelectorAll('.jstop');
            if (!truck) return;

            stops[0].classList.add('active');

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    truck.classList.add('drive');
                });
            });

            const totalTime = 3000;
            stops.forEach((stop, i) => {
                if (i === 0) return;
                const t = setTimeout(() => stop.classList.add('active'),
                    (i / (stops.length - 1)) * totalTime);
                journeyTimers.push(t);
            });
        }

        const journeyObserver = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    runJourney();
                } else {
                    resetJourney();
                }
            });
        }, { threshold: 0.4 });

        const journeySection = document.querySelector('.journey');
        if (journeySection) journeyObserver.observe(journeySection);

        /* ── "No comprás envíos" (REPLAY cada vez que entra al viewport) ── */
        let neTimers = [];

        function resetNoEnvios() {
            neTimers.forEach(clearTimeout);
            neTimers = [];
            document.querySelectorAll('.ne-tag').forEach(el => el.classList.remove('visible'));
        }

        function runNoEnvios() {
            resetNoEnvios();
            const tags   = document.querySelectorAll('.ne-tag');

            tags.forEach((tag, i) => {
                const t = setTimeout(() => tag.classList.add('visible'), 480 + i * 130);
                neTimers.push(t);
            });
        }

        const noEnviosObserver = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    runNoEnvios();
                } else {
                    resetNoEnvios();
                }
            });
        }, { threshold: 0.25 });

        const noEnviosSection = document.getElementById('no-envios');
        if (noEnviosSection) noEnviosObserver.observe(noEnviosSection);


                const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObserver.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        /* ── TRUCK DELIVERY ANIMATION ── */
        var difTruckTimers = [];
        function resetDifTruck() {
            difTruckTimers.forEach(clearTimeout);
            difTruckTimers = [];
            var truck = document.getElementById('difTruck');
            if (truck) {
                truck.style.transition = 'none';
                truck.classList.remove('drive');
                truck.offsetHeight;
                truck.style.transition = '';
            }
            document.querySelectorAll('.dif-stop-m').forEach(function(m) { m.classList.remove('passed'); });
            document.querySelectorAll('.dif-deliv').forEach(function(c) { c.classList.remove('dropped'); });
        }
        function runDifTruck() {
            resetDifTruck();
            var truck = document.getElementById('difTruck');
            var markers = document.querySelectorAll('.dif-stop-m');
            var cards = document.querySelectorAll('.dif-deliv');
            difTruckTimers.push(setTimeout(function() {
                if (truck) truck.classList.add('drive');
            }, 120));
            var delays = [380, 1020, 1660, 2300, 2940];
            delays.forEach(function(d, i) {
                difTruckTimers.push(setTimeout(function() {
                    if (markers[i]) markers[i].classList.add('passed');
                    if (cards[i]) cards[i].classList.add('dropped');
                }, d));
            });
        }
        var difTruckObs = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
                if (e.isIntersecting) runDifTruck();
                else resetDifTruck();
            });
        }, { threshold: 0.25 });
        var difSection = document.getElementById('difTruckSection');
        if (difSection) difTruckObs.observe(difSection);
    
    /* TESTIMONIOS CAROUSEL */
    (function(){
        var outer = document.getElementById('tc-outer');
        var track = document.getElementById('tc-track');
        if(!outer || !track) return;
        outer.addEventListener('mouseenter', function(){ track.classList.add('paused'); });
        outer.addEventListener('mouseleave', function(){ track.classList.remove('paused'); });
        outer.addEventListener('touchstart', function(){ track.classList.add('paused'); }, {passive:true});
        outer.addEventListener('touchend',   function(){ track.classList.remove('paused'); }, {passive:true});
    })();