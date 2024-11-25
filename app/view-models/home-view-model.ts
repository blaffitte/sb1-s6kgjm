import { Observable, ObservableArray } from '@nativescript/core';
import { FridgeItem } from '../models/fridge-item';

export class HomeViewModel extends Observable {
    private _items: ObservableArray<FridgeItem>;
    private _categories = ['Produits laitiers', 'Légumes', 'Fruits', 'Viandes', 'Boissons', 'Autres'];

    constructor() {
        super();
        this._items = new ObservableArray<FridgeItem>();
        
        // Ajout d'un exemple
        this.addItem({
            id: '1',
            name: 'Lait',
            quantity: 1,
            expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            category: 'Produits laitiers'
        });
    }

    get items(): ObservableArray<FridgeItem> {
        return this._items;
    }

    get categories(): string[] {
        return this._categories;
    }

    addItem(item: FridgeItem) {
        this._items.push(item);
    }

    removeItem(id: string) {
        const index = this._items.findIndex(item => item.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }

    updateItem(updatedItem: FridgeItem) {
        const index = this._items.findIndex(item => item.id === updatedItem.id);
        if (index !== -1) {
            this._items.setItem(index, updatedItem);
        }
    }
}