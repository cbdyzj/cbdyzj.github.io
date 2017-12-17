// https://www.zhihu.com/question/20941124/answer/16668373

function mine()
{
    while(true)
    {
        let longestChain = getLongestValidChain()

        // A number that changes every time, so that you don't waste 
        // time trying to calculate a valid blockHash with the same
        // input.
        let nonce = getNewNonce()

        let currentTXs = getUnconfirmedTransactionsFromNetwork()

        let newBlock = getNewBlock(longestChain, currentTXs, nonce)

        // http://en.wikipedia.org/wiki/SHA-2
        // and this is what all the "mining machines" are doing.
        let blockHash = sha256(newBlock)

        if (meetReqirements(blockHash))
        {
            broadcast(newBlock)
            // Now the height the block chain is incremented by 1
            // (if the new block is accepted by other peers),
            // and all the TXs in the new block are "confirmed"
        }
    }
}
////////////////////////////////////////////////////////////////
function sendBTC(amount)
{
    let sourceTXs = pickConfirmedTransactionsToBeSpent(amount)
    let tx = generateTX(sourceTXs, targetAddrs, amount, fee)
    let signedTx = sign(tx, privateKeysOfAllInputAddress)
    broadcast(signedTx)
}
////////////////////////////////////////////////////////////////
