const year = new Date().getFullYear();
const month = new Date().getMonth() + 1; // Months are zero-indexed
const day = new Date().getDate();

console.log(`今日は${year}年${month}月${day}日です。`);