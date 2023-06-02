export interface Reservation {
	user: string
	inherited: boolean
	/* Date format : IS8601 */
	expirationDate: string
}
