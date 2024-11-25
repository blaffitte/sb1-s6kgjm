import { Observable } from '@nativescript/core';
import { FridgeItem } from '../models/fridge-item';

export class ItemFormViewModel extends Observable {
    private _categories = ['Produits laitiers', 'Légumes', 'Fruits', 'Viandes', 'Boissons', 'Autres'];
    private _id: string;
    private _name: string = '';
    private _quantity: number = 1;
    private _expiryDate: Date = new Date();
    private _selectedCategoryIndex: number = 0;
    private _isEditing: boolean = false;

    constructor(item?: FridgeItem) {
        super();

        if (item) {
            this._id = item.id;
            this._name = item.name;
            this._quantity = item.quantity;
            this._expiryDate = new Date(item.expiryDate);
            this._selectedCategoryIndex = this._categories.indexOf(item.category);
            this._isEditing = true;
        } else {
            this._id = Date.now().toString();
        }
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value);
        }
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        if (this._quantity !== value) {
            this._quantity = value;
            this.notifyPropertyChange('quantity', value);
        }
    }

    get expiryDate(): Date {
        return this._expiryDate;
    }

    set expiryDate(value: Date) {
        if (this._expiryDate !== value) {
            this._expiryDate = value;
            this.notifyPropertyChange('expiryDate', value);
        }
    }

    get categories(): string[] {
        return this._categories;
    }

    get selectedCategoryIndex(): number {
        return this._selectedCategoryIndex;
    }

    set selectedCategoryIndex(value: number) {
        if (this._selectedCategoryIndex !== value) {
            this._selectedCategoryIndex = value;
            this.notifyPropertyChange('selectedCategoryIndex', value);
        }
    }

    get isEditing(): boolean {
        return this._isEditing;
    }

    validate(): boolean {
        return this._name.length > 0 && this._quantity > 0;
    }

    getItem(): FridgeItem {
        return {
            id: this._id,
            name: this._name,
            quantity: this._quantity,
            expiryDate: this._expiryDate,
            category: this._categories[this._selectedCategoryIndex]
        };
    }
}