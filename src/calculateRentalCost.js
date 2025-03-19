/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RATE = 40;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days < 3) {
    return days * DAY_RATE;
  }

  if (days < 7) {
    return days * DAY_RATE - MEDIUM_TERM_DISCOUNT;
  }

  return days * DAY_RATE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
