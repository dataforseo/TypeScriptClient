# HotelAboutInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**description** | **string** | *description of the hotel*. the description of the hotel entity for which the results are collected |[optional]|
**sub_descriptions** | **string[]** | *additional description of the hotel*. details about the hotel provided in addition to the description |[optional]|
**check_in_time** | **TimeInfo** | *hotel check-in time*. check-in time indicated in the hotel listing |[optional]|
**check_out_time** | **TimeInfo** | *hotel check-out time*. check-out time indicated in the hotel listing |[optional]|
**full_address** | **string** | *full address of the hotel*. address of the hotel indicated in the standardised format |[optional]|
**domain** | **string** | *hotel domain*. domain of the hotel's website |[optional]|
**url** | **string** | *hotel url*. URL to the hotel's website indicated in the listing |[optional]|
**amenities** | **HotelAmenityInfo[]** | *hotel amenities*. information about hotel amenities |[optional]|
**popular_amenities** | **HotelAmenityItemInfo[]** | *hotel amenities*. information about hotel amenities labelled as 'popular' |[optional]|