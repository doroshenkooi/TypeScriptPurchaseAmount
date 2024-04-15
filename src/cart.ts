import buyable from './buyable';

export default class cart {
    private items: buyable[] = [];

    add(item: buyable): void {
        this.items.push(item);
    }

    getall(): buyable[] {
        return [...this.items];
    }

    calculateTotalCost() {
        const totalcost = this.items.reduce((sum, item) => {
            return sum + item.price;
        }, 0);
        return totalcost;
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
