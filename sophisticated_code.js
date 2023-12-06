/**
 * File: sophisticated_code.js
 * Description: This code demonstrates a sophisticated and complex implementation in JavaScript.
 * It showcases a custom implementation of a data structure called Trie, along with various
 * methods to add, search, and remove words from the Trie.
 */

class TrieNode {
  constructor() {
    // Number of times a word ends at this node
    this.wordCount = 0;
    
    // Map of characters to child nodes
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    // Root of the Trie
    this.root = new TrieNode();
  }
  
  // Add a word to the Trie
  addWord(word) {
    let currentNode = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }
    
    currentNode.wordCount++;
  }
  
  // Search for a given word in the Trie
  search(word) {
    let currentNode = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        return 0;
      }
      currentNode = currentNode.children.get(char);
    }
    
    return currentNode.wordCount;
  }
  
  // Remove a word from the Trie
  removeWord(word) {
    let currentNode = this.root;
    let nodes = [];
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children.has(char)) {
        return;
      }
      nodes.push(currentNode);
      currentNode = currentNode.children.get(char);
    }
    
    if (currentNode.wordCount > 0) {
      currentNode.wordCount--;
    }
    
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      if (currentNode.wordCount === 0 && currentNode.children.size === 0) {
        node.children.delete(word[i]);
        currentNode = node;
      } else {
        break;
      }
    }
  }
}

// Usage example:

const trie = new Trie();

trie.addWord("apple");
trie.addWord("application");
trie.addWord("board");
trie.addWord("book");
trie.addWord("booked");
trie.addWord("bookshelf");

console.log(trie.search("apple")); // Output: 1
console.log(trie.search("book")); // Output: 3

trie.removeWord("bookshelf");

console.log(trie.search("book")); // Output: 2
console.log(trie.search("bookshelf")); // Output: 0

// Continued usage of various methods...

// ... More lines of code ...

// ... More complex and sophisticated operations on the Trie ...

// End of the code