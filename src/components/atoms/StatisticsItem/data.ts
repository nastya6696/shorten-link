import { StatisticsItemProps } from "./StatisticsItem";
import BrandRecognition from "../../../assets/svg/icon-brand-recognition.svg";
import DetailedRecords from "../../../assets/svg/icon-detailed-records.svg";
import FullyCustomizable from "../../../assets/svg/icon-fully-customizable.svg";


export const statisticsItems: StatisticsItemProps[] = [
  {
    title: "Brand Recognition",
    description: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help install confidence in your content.",
    icon: BrandRecognition,
  },
  {
    title: "Detailed Records",
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: DetailedRecords,
  },
  {
    title: "Fully Customizable",
    description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: FullyCustomizable,
  }
];
