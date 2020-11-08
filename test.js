const s = "catsanddog"

const wordDict = [
  'cat', 'cats', 'and', 'dog'
]
let list = []
function divide(s, wordDict, lastWord = null) {
  for (let i = 1; i <= s.length; i++) {
    const pre = s.slice(0, i)
    const pro = s.slice(i)
    if (wordDict.includes(pre)) {
      list.push({
        before: lastWord,
        next: pre
      })
      divide(pro, wordDict, pre)
    }
  }
}

divide(s, wordDict)
console.log(list)