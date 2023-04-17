# Data-Compression
Data compression/decompression in JavaScript.

## Decompress

### Description
This function decompresses a compressed blob object. This function may not work under Firefox. Check browser
compatibility for more information.
 
[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API#browser_compatibility)

### Parameters
- `compressedBlob` : `Blob` - Compressed blob object
- `format` : `string` - Decompression format

### Returns
- `Blob` - Decompressed blob object

### Function
- [decompress_blob.js](./decompress_blob.js)

```js
export function decompressBlob(compressedBlob = new Blob(), format = 'gzip') {
    const ds = new DecompressionStream(format);
    const decompressedStream = compressedBlob.stream().pipeThrough(ds);
    return new Response(decompressedStream).blob();
}
```
