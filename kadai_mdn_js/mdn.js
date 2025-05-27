const date = new Date();
const options = {
  year:'numeric',
  month:'long',
  day:'numeric',
}

const year = date.getFullYear(); // 現在の年を取得
const month = date.getMonth() + 1; // 現在の月を取得（0から11で表されるため、+1する）
const day = date.getDate(); // 現在の日を取得

console.log(`${year}年${month}月${day}日`);
