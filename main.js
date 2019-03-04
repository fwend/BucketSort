const arr = [0.9, 0.4, 0.7, 0.2, 0.6, 0.1, 0.8, 0.3, 0.5];

const bucketSort = (a) => {
    const n = a.length;
  
    const buckets = Array.from({length:n}, () => []);
    
    for (const v of a) {
        buckets[Math.floor(v * n)].push(v);
    }
  
    buckets.forEach((b) => {
      
        for (let i = 1; i < b.length; i++) {

            const key = b[i];
    
            let j = i - 1;
            for (; j >= 0 && b[j] > key; j--) {
                b[j + 1] = b[j];
            }
    
            b[j + 1] = key;
        }
    });
  
    return buckets.flat();    
};

console.log(bucketSort(arr));
