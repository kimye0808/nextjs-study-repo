"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    //file type input의 files 배열 속성 접근
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    //이미지 미리보기 구현 위해 data URL로 변환
    const fileReader = new FileReader(file);
    fileReader.onload = () => {
      //onload : 파일 읽기 작업 완료시 실행
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file); //파일 읽고 data URL로 변환, 비동기 작업, 완료시 onload
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required //이미지 선택시에만 제출 가능
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
