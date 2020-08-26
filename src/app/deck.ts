import { Card } from './card';

export interface Deck {
    name: String;
    source_url: String;
    cards: Card[];
    main_cards: Card[];
    extra_cards: Card[];
    side_cards: Card[];
    cids: Card[];
    main_cids: Card[];
    extra_cids: Card[];
    side_cids: Card[];
}