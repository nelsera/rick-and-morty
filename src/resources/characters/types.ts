export type FetchCharactersParams = {
	name?: string
	page?: number
}

export type FetchCharacterParams = {
	id: number
}

export type DataMeta = {
	count: number
	next: string
	pages: number
	prev: string | null
}

export type Character = {
	created: string
	episode: unknown[]
	gender: string
	id: number
	image: string
	location: {
		name: string
		url: string
	}
	name: string
	origin: {
		name: string
		url: string
	}
	species: string
	status: string
	type: string
	url: string
}

export type CharactersError = {
	dataSource: []
	dataMeta: null
	error: unknown
	hasContent: boolean
	hasError: boolean
	isEmpty: boolean
}

export type CharactersSuccess = {
	dataSource: Character[]
	dataMeta: DataMeta
	error: unknown
	hasContent: boolean
	hasError: boolean
	isEmpty: boolean
}

export type CharactersResponse = CharactersError | CharactersSuccess

export type CharacterError = {
	dataSource: any
	error: unknown
	hasContent: boolean
	hasError: boolean
	isEmpty: boolean
}

export type CharacterSuccess = {
	dataSource: Character
	error: unknown
	hasContent: boolean
	hasError: boolean
	isEmpty: boolean
}

export type CharacterResponse = CharacterError | CharacterSuccess
