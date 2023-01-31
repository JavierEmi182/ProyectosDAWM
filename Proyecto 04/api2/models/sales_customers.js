'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    orderNumber: {
      type: Number
    },
    orderDate: {
      type: Date
    },
    requiredDate: {
      type: Date
    },
    shippedDate: {
      type: Date
    },
    status: {
      type: String
    },
    comments: {
      type: String
    },
    customerNumber: {
      type: Number
    },
    orderNumber__1: {
      type: Number
    },
    productCode: {
      type: String
    },
    quantityOrdered: {
      type: Number
    },
    priceEach: {
      type: Number
    },
    orderLineNumber: {
      type: Number
    },
    productCode__1: {
      type: String
    },
    productName: {
      type: String
    },
    productLine: {
      type: String
    },
    productScale: {
      type: String
    },
    productVendor: {
      type: String
    },
    productDescription: {
      type: String
    },
    quantityinStock: {
      type: Number
    },
    buyPrice: {
      type: Number
    },
    MSRP: {
      type: Number
    },
    productLine__1: {
      type: String
    },
    textDescription: {
      type: String
    },
    htmlDescription: {
      type: String
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const sales_customers = mongoose.model('sales_customers', newSchema);
  return sales_customers;
};