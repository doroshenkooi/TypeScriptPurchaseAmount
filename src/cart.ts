import buyable from './buyable';

export default class cart {
    private items: buyable[] = [];

    add(item: buyable): void {
        this.items.push(item);
    }

    getall(): buyable[] {
        return [...this.items];
    }

    calculateTotalCost(): number {
        let totalCost = 0;
        for (let item of this.items) {
            totalCost += item.price;
        }
        return totalCost;
    }

    calculateTotalCostWithDiscount(discount: number): number {
        let totalCost = this.calculateTotalCost();
        let discountAmount = totalCost * (discount / 100);
        return totalCost - discountAmount;
    }

    removeItemById(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}
