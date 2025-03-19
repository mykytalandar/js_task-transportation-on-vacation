/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = days * 40;

  if (days >= 3 && days < 7) {
    return rentCost - 20;
  } else if (days >= 7) {
    return rentCost - 50;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
