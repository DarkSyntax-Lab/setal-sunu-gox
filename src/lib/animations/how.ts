import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const all = (root: Element, sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));

/**
 * Animations « motion design » de la section Comment ça marche, identiques sur ordinateur et sur mobile.
 * Les éléments sont repérés par des attributs data-* (data-step, data-num, data-v="phone"…).
 * Rien ne s'anime si l'utilisateur a demandé de réduire les animations.
 */
export function setupHow(desktop: HTMLElement, mobile: HTMLElement, sweep: (p: number) => void) {
	const mm = gsap.matchMedia();
	let sweepTween: gsap.core.Tween | undefined;

	/** Les mouvements en boucle d'une étape : un par type d'illustration. */
	const loopsOf = (card: HTMLElement) => {
		const v = (name: string) => all(card, `[data-v="${name}"]`);
		const out: gsap.core.Animation[] = [];
		const add = (a: gsap.core.Animation) => out.push(a);
		v('phone').forEach((el, i) =>
			add(
				gsap.to(el, {
					y: -6,
					rotateY: 5,
					duration: 2.4 + i * 0.3,
					yoyo: true,
					repeat: -1,
					ease: 'sine.inOut'
				})
			)
		);
		v('photo').forEach((el) =>
			add(gsap.to(el, { scale: 1.07, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut' }))
		);
		v('bracket').forEach((el) =>
			add(gsap.to(el, { scale: 1.05, duration: 0.9, yoyo: true, repeat: -1, ease: 'sine.inOut' }))
		);
		v('flash').forEach((el) =>
			add(
				gsap
					.timeline({ repeat: -1, repeatDelay: 2.8 })
					.to(el, { opacity: 0.85, duration: 0.07 })
					.to(el, { opacity: 0, duration: 0.5 })
			)
		);
		v('pin').forEach((el) =>
			add(
				gsap
					.timeline({ repeat: -1, repeatDelay: 1.8 })
					.fromTo(
						el,
						{ y: -90, opacity: 0 },
						{ y: 0, opacity: 1, duration: 0.9, ease: 'bounce.out' }
					)
			)
		);
		v('ripple').forEach((el) =>
			add(
				gsap.fromTo(
					el,
					{ scale: 0.3, opacity: 0.7 },
					{ scale: 2.4, opacity: 0, duration: 1.7, repeat: -1, ease: 'power1.out' }
				)
			)
		);
		v('check').forEach((el) =>
			add(
				gsap
					.timeline({ repeat: -1, repeatDelay: 2 })
					.fromTo(
						el,
						{ scale: 0, rotate: -90 },
						{ scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(3)' }
					)
			)
		);
		v('notif').forEach((el) =>
			add(
				gsap.timeline({ repeat: -1, repeatDelay: 2.6 }).fromTo(
					el,
					{ y: -60, opacity: 0, rotateX: -40 },
					{
						y: 0,
						opacity: 1,
						rotateX: 0,
						transformPerspective: 600,
						duration: 0.9,
						ease: 'bounce.out'
					}
				)
			)
		);
		v('bell').forEach((el) =>
			add(
				gsap
					.timeline({ repeat: -1, repeatDelay: 2.4, delay: 0.7 })
					.to(el, {
						rotation: 16,
						transformOrigin: '50% 0%',
						duration: 0.08,
						repeat: 6,
						yoyo: true
					})
					.to(el, { rotation: 0, duration: 0.1 })
			)
		);
		v('cal').forEach((el) =>
			add(
				gsap.timeline({ repeat: -1, repeatDelay: 3 }).fromTo(
					el,
					{ rotateX: -90, opacity: 0 },
					{
						rotateX: 0,
						opacity: 1,
						transformOrigin: '50% 0%',
						transformPerspective: 600,
						duration: 0.9,
						ease: 'back.out(1.6)'
					}
				)
			)
		);
		v('tick').forEach((el) =>
			add(
				gsap
					.timeline({ repeat: -1, repeatDelay: 3.2, delay: 0.8 })
					.fromTo(el, { scale: 0 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' })
			)
		);
		v('count').forEach((el) => {
			const o = { n: 0 };
			const to = Number(el.dataset.to) || 0;
			add(
				gsap.timeline({ repeat: -1, repeatDelay: 3.5 }).fromTo(
					o,
					{ n: 0 },
					{
						n: to,
						duration: 1.6,
						ease: 'power2.out',
						onUpdate: () => {
							el.textContent = String(Math.round(o.n));
						}
					}
				)
			);
		});
		v('trophy').forEach((el) =>
			add(
				gsap.timeline({ repeat: -1, repeatDelay: 3 }).fromTo(
					el,
					{ rotateY: -180, scale: 0.4, opacity: 0 },
					{
						rotateY: 0,
						scale: 1,
						opacity: 1,
						transformPerspective: 600,
						duration: 1,
						ease: 'back.out(1.8)'
					}
				)
			)
		);
		v('laurel').forEach((el, i) =>
			add(
				gsap
					.timeline({ repeat: -1, repeatDelay: 3.5 })
					.fromTo(
						el,
						{ x: i % 2 ? 24 : -24, opacity: 0 },
						{ x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
					)
			)
		);
		const rewards = v('reward');
		if (rewards.length) {
			add(
				gsap.timeline({ repeat: -1, repeatDelay: 5 }).fromTo(
					rewards,
					{ rotateY: 90, scale: 0.6, opacity: 0 },
					{
						rotateY: 0,
						scale: 1,
						opacity: 1,
						transformPerspective: 700,
						duration: 0.7,
						ease: 'back.out(2)',
						stagger: 0.18
					}
				)
			);
			rewards.forEach((el, i) =>
				add(
					gsap.to(el, {
						y: -7,
						duration: 1.6 + i * 0.25,
						yoyo: true,
						repeat: -1,
						ease: 'sine.inOut',
						delay: i * 0.2
					})
				)
			);
		}
		v('slider').forEach(() => {
			const o = { p: 25 };
			sweepTween = gsap.to(o, {
				p: 75,
				duration: 2.4,
				yoyo: true,
				repeat: -1,
				ease: 'sine.inOut',
				onUpdate: () => sweep(o.p)
			});
			add(sweepTween);
		});
		return out;
	};

	mm.add({ desk: '(min-width: 1100px)', calm: '(prefers-reduced-motion: reduce)' }, (ctx) => {
		const { desk, calm } = ctx.conditions as { desk: boolean; calm: boolean };
		if (calm) return;
		const root = desk ? desktop : mobile;
		const cards = all(root, '[data-step]');
		const off: (() => void)[] = [];

		/** Entrée en 3D d'une étape : carte, numéro, étiquette, pastille, puis la flèche qui se dessine. */
		const enter = (tl: gsap.core.Timeline, card: HTMLElement, i: number, at: string) => {
			const from = desk
				? { y: 70, rotateX: -26, rotateY: i % 3 === 0 ? -14 : i % 3 === 2 ? 14 : 0 }
				: { y: 60, rotateX: -24, rotateY: i % 2 ? 12 : -12 };
			tl.from(
				card,
				{ opacity: 0, scale: 0.9, transformPerspective: 1100, duration: 0.85, ...from },
				at
			)
				.from(
					card.querySelector('[data-num]'),
					{ scale: 0, rotate: -220, ease: 'back.out(2.4)', duration: 0.6 },
					'<0.25'
				)
				.from(
					card.querySelector('[data-pill]'),
					{ clipPath: 'inset(0 100% 0 0)', duration: 0.5 },
					'<0.1'
				)
				.from(
					card.querySelector('[data-icon]'),
					{ scale: 0, ease: 'back.out(3)', duration: 0.5 },
					'<0.1'
				);
			const arrow = desk
				? root.querySelector(`[data-arrow="${i + 1}"]`)
				: card.querySelector('[data-arrow]');
			if (arrow) {
				tl.fromTo(
					arrow.querySelectorAll('[data-draw]'),
					{ strokeDashoffset: 1 },
					{ strokeDashoffset: 0, duration: 0.5, ease: 'power2.inOut' },
					'<0.3'
				).from(arrow.querySelectorAll('[data-head]'), { opacity: 0, duration: 0.25 }, '>-0.1');
			}
		};
		const headFrom = {
			y: 40,
			opacity: 0,
			rotateX: -35,
			transformPerspective: 900,
			transformOrigin: '50% 100%',
			duration: 0.8,
			ease: 'power3.out'
		};
		const cta = all(root, '[data-a="cta"]');

		if (desk) {
			// Ordinateur : une seule séquence qui suit le parcours 1 → 9
			const tl = gsap.timeline({
				scrollTrigger: { trigger: root, start: 'top 72%', once: true },
				defaults: { ease: 'power3.out' }
			});
			tl.from(all(root, '[data-a="head"]'), { ...headFrom, stagger: 0.12 });
			cards.forEach((card, i) => enter(tl, card, i, i === 0 ? '>-0.4' : '>-0.55'));
			tl.from(cta, { y: 30, opacity: 0, scale: 0.9, ease: 'back.out(2)', duration: 0.7 }, '>-0.2');
		} else {
			// Mobile : chaque élément s'anime au moment où l'on arrive dessus en faisant défiler
			all(root, '[data-a="head"]').forEach((el) =>
				gsap.from(el, { ...headFrom, scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
			);
			cards.forEach((card, i) =>
				enter(
					gsap.timeline({
						scrollTrigger: { trigger: card, start: 'top 88%', once: true },
						defaults: { ease: 'power3.out' }
					}),
					card,
					i,
					'0'
				)
			);
			cta.forEach((el) =>
				gsap.from(el, {
					y: 30,
					opacity: 0,
					scale: 0.9,
					ease: 'back.out(2)',
					duration: 0.7,
					scrollTrigger: { trigger: el, start: 'top 92%', once: true }
				})
			);
			// Inclinaison 3D liée au défilement : la carte pivote doucement en traversant l'écran
			cards.forEach((card) => {
				const face = card.querySelector<HTMLElement>('[data-card]');
				if (face)
					gsap.fromTo(
						face,
						{ rotateX: 7, transformPerspective: 900 },
						{
							rotateX: -7,
							ease: 'none',
							scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true }
						}
					);
			});
		}

		// Mouvements en boucle : ne tournent que pour les étapes visibles à l'écran (économie de batterie)
		cards.forEach((card) => {
			const loops = loopsOf(card);
			loops.forEach((l) => l.pause());
			ScrollTrigger.create({
				trigger: card,
				start: 'top bottom',
				end: 'bottom top',
				onToggle: (self) => loops.forEach((l) => (self.isActive ? l.play() : l.pause()))
			});
		});

		// Inclinaison 3D des cartes selon la souris (ordinateur)
		if (desk) {
			cards.forEach((card) => {
				const face = card.querySelector<HTMLElement>('[data-card]');
				if (!face) return;
				const move = (e: PointerEvent) => {
					const r = card.getBoundingClientRect();
					gsap.to(face, {
						rotateY: ((e.clientX - r.left) / r.width - 0.5) * 10,
						rotateX: -((e.clientY - r.top) / r.height - 0.5) * 8,
						transformPerspective: 900,
						duration: 0.4,
						ease: 'power2.out'
					});
				};
				const leave = () =>
					gsap.to(face, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' });
				card.addEventListener('pointermove', move);
				card.addEventListener('pointerleave', leave);
				off.push(() => {
					card.removeEventListener('pointermove', move);
					card.removeEventListener('pointerleave', leave);
				});
			});
		}
		return () => off.forEach((f) => f());
	});

	return { destroy: () => mm.revert(), stopSweep: () => sweepTween?.kill() };
}
