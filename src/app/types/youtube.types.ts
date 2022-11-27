export interface YoutubeResponse {
	etag: string;
	items: Item[];
	kind: string;
	pageInfo: PageInfo;
}

interface PageInfo {
	resultsPerPage: number;
	totalResults: number;
}

interface Item {
	etag: string;
	id: string;
	kind: string;
	statistics: Statistics;
}

interface Statistics {
	hiddenSubscriberCount: boolean;
	subscriberCount: string;
	videoCount: string;
	viewCount: string;
}
