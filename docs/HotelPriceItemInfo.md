# HotelPriceItemInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**title** | **string** | *title of the hotel* |[optional]|
**price** | **number** | *price per night* |[optional]|
**currency** | **string** | *price currency*. `USD` is applied by default, unless specified in the POST array |[optional]|
**url** | **string** | third-party page url. URL to the third-party website page with pricing information |[optional]|
**domain** | **string** | third-party domain. domain of the third-party website page with pricing information |[optional]|
**is_paid** | **boolean** | *indicates a paid hotel listing*. if `true`, related `hotel_search_item` is a paid ad. if `false`, related `hotel_search_item` is an organic hotel listing |[optional]|
**official_site** | **boolean** |  |[optional]|
**free_cancellation_until** | **string** | date until which free cancellation is available. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. equals null if free cancellation is not available for the selected dates |[optional]|
**offers** | **HotelInfoPriceOffer[]** |  |[optional]|