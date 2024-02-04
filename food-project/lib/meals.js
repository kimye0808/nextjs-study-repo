import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); //일부러 시간 지연
  // throw new Error("Loading meals failed");//error 체크용
  // db.prepare('SELECT * FROM meals').run() <- data 주입하거나 바꿀때
  return db.prepare("SELECT * FROM meals").all(); //<- data fetch할때 (모든 행) 열 하나 = get()
}
