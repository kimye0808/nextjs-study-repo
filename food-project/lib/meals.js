import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); //일부러 시간 지연
  // throw new Error("Loading meals failed");//error 체크용
  // db.prepare('SELECT * FROM meals').run() <- data 주입하거나 바꿀때
  return db.prepare("SELECT * FROM meals").all(); //<- data fetch할때 (모든 행) 열 하나 = get()
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop(); //split으로 나누고 pop으로 확장자 정보
  const fileName = `${meal.slug}.${extension}`; //파일명 새로 만들기

  //createWriteStream: 파일 쓰고 싶은 경로에 데이터를 쓸 수 있는 stream return
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  //write는 이미지의 buffer형식이 필요하고 arrayBuffer를 통해 buffer를 얻음
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      //두 번째 인자는 작업 종료시 실행됨
      throw new Error("Saving image failed!");
    }
  });
  //write했으면 meal의 image의 경로도 수정 (이미지 요청은 자동으로 public으로 보내져서)
  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (        
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
      )
  `
  ).run(meal);
}
