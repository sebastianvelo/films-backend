import { ActionProps } from "../../common/model/ActionProps";
import { ImageProps } from "../../common/model/ImageProps";
import { CarouselSectionProps } from "../../common/model/CarouselSectionProps";
import ChartProps from "../../common/model/ChartProps";

interface DataItemProps {
  title: string;
  description: string;
}

interface DetailInfoProps {
  data: (DataItemProps | undefined)[];
}

interface DetailHeaderProps {
  title: string;
  subtitle?: string;
}

interface DetailVideoProps {
  title?: string;
  src?: string;
}

export interface DetailProps {
  image?: ImageProps;
  header?: DetailHeaderProps;
  description?: DataItemProps;
  info?: DetailInfoProps;
  actions?: ActionProps[];
  video?: DetailVideoProps;
}

export interface DetailPageProps {
  detail: DetailProps;
  charts?: {
    title: string;
    chart: ChartProps;
  }[];
  sections?: CarouselSectionProps[];
}