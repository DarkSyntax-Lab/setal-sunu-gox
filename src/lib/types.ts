export type GalleryItem = {
	id: string;
	neighborhood: string;
	date: string;
	volunteers: number;
	wasteKg?: number | null;
	beforeUrl: string;
	afterUrl: string;
};

export type PodiumItem = { rank: 1 | 2 | 3; name: string; pts: string; photo?: string | null };
