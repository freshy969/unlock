/**
 * A copy paste of relevent information from the unlock-app wallet service.
 * At the moment it's not possible to depend on that file directly in smart contract tests.
 * The values here should manually be kept in sync with unlock-app/src/services/walletService.js
 * until we can create a shared dependancy.
 */
module.exports = class WalletService {
  static gasAmountConstants () {
    return {
      createLock: 3000000,
      updateKeyPrice: 1000000,
      purchaseKey: 1000000,
      withdrawFromLock: 1000000
    }
  }
}