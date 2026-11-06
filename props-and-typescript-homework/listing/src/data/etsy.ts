import etsyJson from './etsy.json?raw'
import type { ListingItem } from '../components/Listing'

export const items: ListingItem[] = JSON.parse(etsyJson)
