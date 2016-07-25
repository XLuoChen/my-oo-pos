class Receipt {
  constructor(receiptItems = []) {

    let total = 0;
    let savedTotal = 0;

    for (const receiptItem of receiptItems) {
      total += receiptItem.subtotal;
      savedTotal += receiptItem.saved;
    }

    this.receiptItems = receiptItems;
    this.total = total;
    this.savedTotal = savedTotal;
  }
}

module.exports = Receipt;
