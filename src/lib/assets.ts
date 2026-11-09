// Retrouve vos images dans src/lib/assets/ par leur NOM, même avec des espaces, des majuscules ou un espace parasite devant.
// Un fichier absent donne null (jamais une erreur) : l'emplacement reste vide.
const files = import.meta.glob('/src/lib/assets/*.{png,jpg,jpeg,webp,svg}', {
	eager: true,
	query: '?url',
	import: 'default'
}) as Record<string, string>;

const norm = (name: string) => name.trim().toLowerCase();
const byName = new Map(
	Object.entries(files).map(([path, url]) => [norm(path.split('/').pop() ?? ''), url])
);

export const asset = (name: string): string | null => byName.get(norm(name)) ?? null;

/** Portraits : profil1.jpeg, profile2.jpeg, profile4.jpeg… (avec ou sans « e »), triés par numéro. */
export const portraits: string[] = [...byName.entries()]
	.map(([name, url]) => ({ n: /^profile?(\d+)\./.exec(name)?.[1], url }))
	.filter((p): p is { n: string; url: string } => p.n !== undefined)
	.sort((a, b) => Number(a.n) - Number(b.n))
	.map((p) => p.url);
