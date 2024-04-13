import cart from './cart';

describe('cart', () => {
    let cartInstance: cart;

    beforeEach(() => {
        cartInstance = new cart();
    });

    test('calculateTotalCost() should return correct total cost', () => {
        cartInstance.add({ id: 1, name: 'item 1', price: 10 });
        cartInstance.add({ id: 2, name: 'item 2', price: 20 });

        expect(cartInstance.calculateTotalCost()).toBe(30);
    });

    test('calculateTotalCostWithDiscount() should return correct total cost with discount', () => {
        cartInstance.add({ id: 1, name: 'item 1', price: 10 });
        cartInstance.add({ id: 2, name: 'item 2', price: 20 });

        expect(cartInstance.calculateTotalCostWithDiscount(10)).toBe(27);
    });

    test('removeItemById() should remove item from cart', () => {
        cartInstance.add({ id: 1, name: 'item 1', price: 10 });
        cartInstance.add({ id: 2, name: 'item 2', price: 20 });

        cartInstance.removeItemById(1);
        expect(cartInstance.getall()).toEqual([{ id: 2, name: 'item 2', price: 20 }]);
    });
});
