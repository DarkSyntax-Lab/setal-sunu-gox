import { gsap } from 'gsap';

type Options = { delay?: number; y?: number };

/** Action Svelte : fait apparaître un élément en douceur. Désactivée si l'utilisateur réduit les animations. */
export function reveal(node: HTMLElement, options: Options = {}) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	const tween = gsap.from(node, {
		opacity: 0,
		y: options.y ?? 24,
		duration: 0.7,
		delay: options.delay ?? 0,
		ease: 'power2.out'
	});
	return {
		destroy() {
			tween.kill();
		}
	};
}
