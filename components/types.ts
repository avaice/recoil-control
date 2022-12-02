export type ApiLoaded<T> = { status: 'success'; data: T }
export type ApiNotLoaded = { status: 'loading' | 'failed' }
