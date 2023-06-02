import { Base } from '../asset'
import { Reservation } from '../pa/reservation'

export interface ReservationResponse {
	base: Base
	reservations: Reservation[]
	_links: Links
}

interface Links {
	self: Self
	'pa:create-reservation': Self
	'pa:delete-reservation': Self
}

interface Self {
	href: string
}
