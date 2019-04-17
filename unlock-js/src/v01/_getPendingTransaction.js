import Web3Utils from 'web3-utils'
import * as UnlockV01 from 'unlock-abi-0-1'

/**
 * This means the transaction is not in a block yet (ie. not mined), but has been propagated
 * We do not know what the transacion is about though so we need to extract its info from
 * the input.
 * @param {*} blockTransaction
 * @private
 */
export default function(blockTransaction) {
  this._watchTransaction(blockTransaction.hash)

  const contract =
    this.unlockContractAddress ===
    Web3Utils.toChecksumAddress(blockTransaction.to)
      ? UnlockV01.Unlock
      : UnlockV01.PublicLock

  return this.parseTransactionFromInput(
    blockTransaction.hash,
    contract,
    blockTransaction.input,
    blockTransaction.to
  )
}