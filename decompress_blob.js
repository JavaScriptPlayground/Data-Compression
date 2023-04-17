/**
 * This function decompresses a compressed blob object. This function may not work under Firefox. Check browser
 * compatibility for more information.
 * 
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API#browser_compatibility)
 * @param {Blob} compressedBlob Compressed blob object
 * @param {string} format Decompression format (`gzip` | `deflate` | `deflate-raw`)
 * @returns {Promise<Blob>} Decompressed blob object
 */
export function decompressBlob(compressedBlob = new Blob(), format = 'gzip') {
    const ds = new DecompressionStream(format);
    const decompressedStream = compressedBlob.stream().pipeThrough(ds);
    return new Response(decompressedStream).blob();
}
