# shimmering-water-encrypt

![npm](https://img.shields.io/npm/v/shimmering-water-encrypt)
![npm bundle size](https://img.shields.io/bundlephobia/min/shimmering-water-encrypt)
![NPM](https://img.shields.io/npm/l/shimmering-water-encrypt)

Encrypt and decrypt your data securely with the `shimmering-water-encrypt` library.

## Installation

You can install the library via npm:

```bash
npm install shimmering-water-encrypt
```

## Usage

```javascript
import ShimmeringWaterEncrypt from 'shimmering-water-encrypt';

// Encrypt data
const dataToEncrypt = {
  name: 'John Doe',
  age: 30
};
const secretKey = 'mySecretKey';
const encryptedData = ShimmeringWaterEncrypt.encrypt(dataToEncrypt, secretKey);
console.log('Encrypted data:', encryptedData);

// Decrypt data
const decryptedData = ShimmeringWaterEncrypt.decrypt(encryptedData, secretKey);
console.log('Decrypted data:', decryptedData);
```

## API

### `ShimmeringWaterEncrypt.encrypt(data: object, secretKey: string): string`

Encrypts the provided data using AES encryption with the specified secret key.

- `data`: The data to encrypt, must be a valid object.
- `secretKey`: The secret key used for encryption, must be a non-empty string.

Returns the encrypted data as a string.

### `ShimmeringWaterEncrypt.decrypt(encryptedData: string, secretKey: string): object`

Decrypts the provided encrypted data using AES decryption with the specified secret key.

- `encryptedData`: The encrypted data to decrypt, must be a valid string.
- `secretKey`: The secret key used for decryption, must be a non-empty string.

Returns the decrypted data as an object.

## Example

```javascript
import ShimmeringWaterEncrypt from 'shimmering-water-encrypt';

// Encrypt data
const dataToEncrypt = {
  name: 'John Doe',
  age: 30
};
const secretKey = 'mySecretKey';
const encryptedData = ShimmeringWaterEncrypt.encrypt(dataToEncrypt, secretKey);
console.log('Encrypted data:', encryptedData);

// Decrypt data
const decryptedData = ShimmeringWaterEncrypt.decrypt(encryptedData, secretKey);
console.log('Decrypted data:', decryptedData);
```

## License

This library is released under the MIT License.
