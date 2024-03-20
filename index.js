import CryptoJS from 'crypto-js';

const ShimmeringWaterEncrypt = {
  encrypt: (data, secretKey) => {
    if (!data || typeof data !== 'object') {
      throw new Error('Data must be a valid object');
    }
    if (!secretKey || typeof secretKey !== 'string') {
      throw new Error('Secret key must be a non-empty string');
    }

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    return encrypted;
  },
  decrypt: (encryptedData, secretKey) => {
    if (!encryptedData || typeof encryptedData !== 'string') {
      throw new Error('Encrypted data must be a valid string');
    }
    if (!secretKey || typeof secretKey !== 'string') {
      throw new Error('Secret key must be a non-empty string');
    }

    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decrypted;
  }
};

export default ShimmeringWaterEncrypt;
