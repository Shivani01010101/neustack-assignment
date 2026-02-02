import { v4 as uuidv4 } from "uuid";
import store from "../data/store.js";
import { DISCOUNT_PERCENTAGE } from "../constants/constants.js";

export function generateDiscountCode() {
  const code = `DISC-${uuidv4().slice(0, 6).toUpperCase()}`;

  store.discounts.codes.push({
    code,
    percentage: DISCOUNT_PERCENTAGE,
    isUsed: false,
  });

  return code;
}

export function validateDiscountCode(code) {
  const discount = store.discounts.codes.find(
    (d) => d.code === code && !d.isUsed
  );

  return discount || null;
}
