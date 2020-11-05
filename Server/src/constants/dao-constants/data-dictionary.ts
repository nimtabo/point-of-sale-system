//represents the INVENTORY table columns
export const INVENTORY_TABLE = {
  ITEM_ID: 'ITEM_ID',
  ITEM_NAME: 'ITEM_NAME',
  QUANTITY: 'QUANTITY',
  PRICE: 'PRICE',
  USER_ID: 'USER_ID',
  LAST_UPDATED_DATE: 'LAST_UPDATED_DATE',
};

//represents the BILLING table columns
export const BILLING_TABLE = {
  BILL_ID: 'BILL_ID',
  PHONE_NUMBER: 'PHONE_NUMBER',
  ITEMS: 'ITEMS',
  CGST: 'CGST',
  SGST: 'SGST',
  ITEMS_COST: 'ITEMS_COST',
  TOTAL_COST: 'TOTAL_COST',
  PAYMENT_MODE: 'PAYMENT_MODE',
  USER_ID: 'USER_ID',
  CREATION_DATE: 'CREATION_DATE',
};

//represents the CUSTOMER table columns
export const CUSTOMER_TABLE = {
  CUSTOMER_ID: 'CUSTOMER_ID',
  PHONE_NUMBER: 'PHONE_NUMBER',
  CUSTOMER_NAME: 'CUSTOMER_NAME',
  NO_OF_VISITS: 'NO_OF_VISITS',
};
