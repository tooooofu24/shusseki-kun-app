import { Img, ImgProps } from "@chakra-ui/react";
import { FC } from "react";

export const Illustration: FC<ImgProps> = (props) => {
  const src = getRandomIllustration();
  return <Img src={src} alt="shigureniのイラスト" width="full" {...props} />;
};

const getRandomIllustration = () => {
  const images = [
    "bath",
    "box",
    "cat",
    "flower",
    "kiwi",
    "meat",
    "money",
    "PC",
    "snow",
    "tel",
    "work",
    "worry",
  ];
  const image = images[Math.floor(Math.random() * images.length)];
  return `/img/shigureni/${image}.png`;
};
