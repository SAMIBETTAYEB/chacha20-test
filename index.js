const chacha20 = require('chacha20')

const key = new Buffer(4)
const nonce = new Buffer(2)

key.fill(0)
nonce.fill(0)

const plaintext = "Hello world!"
const ciphertext = chacha20.encrypt(key, nonce, new Buffer(plaintext))
console.log(ciphertext.toString('hex'))
const decrypted = chacha20.decrypt(key, nonce, ciphertext)
console.log(decrypted.toString('utf8'))