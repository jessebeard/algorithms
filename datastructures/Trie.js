class TrieNode {
    constructor(key) {
      this.key = key
      this.parent = null
      this.children = {}
      this.end = false
    }
    getWord() {
      const result = [];
      this.bind(this)
      while (this !== null) {
        result.unshift(this.key)
        this = this.parent
      }
      return result.join('')
    }
  }
class Trie {
  constructor() {
    this.root = new TrieNode(null)
  }
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i])
        node.children[word[i]].parent = node
      }
      node = node.children[word[i]]
      if (i === word.length - 1) {
        node.end = true
      }
    };
  };
  contains(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      if (node.children[string[i]]) {
        node = node.children[string[i]]
      } else {
        return false
      };
    }
    return node.end
  }
  find(prefix) {
    let node = this.root;
    const output = [];
    for (let i = 0; i < prefix.length; i++) {
    if (node.children[prefix[i]]) {
      node = node.children[prefix[i]]
    } else {
      return output
  }
 }

  findAllWords(node, output)
    return output
  }
}
  function findAllWords(node, arr) {
    if (node.end) {
      arr.unshift(node.getWord())
    }
  for (const child in node.children) {
    findAllWords(node.children[child], arr)
  }
}

export default Trie;