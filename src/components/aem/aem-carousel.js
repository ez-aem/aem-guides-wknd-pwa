import { withMappable, MapTo } from '@adobe/aem-react-editable-components';
import * as SpaCoreComponents from "@adobe/aem-core-components-react-spa";
const { CarouselV1, CarouselV1IsEmptyFn } = SpaCoreComponents;

const RESOURCE_TYPE = "wknd-app/components/carousel";

const EditConfig = {
  emptyLabel: "Carousel",
  isEmpty: CarouselV1IsEmptyFn,
  resourceType: RESOURCE_TYPE
};

MapTo(RESOURCE_TYPE)(CarouselV1, EditConfig);

const AEMCarousel = withMappable(CarouselV1, EditConfig);

export default AEMCarousel;