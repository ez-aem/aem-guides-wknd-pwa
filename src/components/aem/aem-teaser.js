// Import the withMappable API provided bu the AEM SPA Editor JS SDK
import { withMappable, MapTo } from '@adobe/aem-react-editable-components';

// Import the AEM React Core Components' Teaser component implementation and it's Empty Function 
import { TeaserV1, TeaserV1IsEmptyFn } from "@adobe/aem-core-components-react-base";

// The sling:resourceType for which this Core Component is registered with in AEM
const RESOURCE_TYPE = "wknd-app/components/teaser";

// Create an EditConfig to allow the AEM SPA Editor to properly render the component in the Editor's context
const EditConfig = {
  emptyLabel: "Teaser",  // The component placeholder in AEM SPA Editor
  isEmpty: TeaserV1IsEmptyFn, // The function to determine if this component has been authored
  resourceType: RESOURCE_TYPE // The sling:resourceType this component is mapped to
};

// MapTo allows the AEM SPA Editor JS SDK to dynamically render components added to SPA Editor Containers
MapTo(RESOURCE_TYPE)(TeaserV1, EditConfig);

// withMappable allows the component to be hardcoded into the SPA; <AEMTeaser .../>
const AEMTeaser = withMappable(TeaserV1, EditConfig);

export default AEMTeaser;