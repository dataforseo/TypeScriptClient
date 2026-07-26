# MerchantGoogleProductInfoTaskGetAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**product_id** | **string** | product ID in a POST array. learn more about the parameter in this help center guide |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received. in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**item_types** | **string[]** | types of items found on the product specification page. possible item types:. product_info_element |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **ProductInfoElement[]** | items on the product page. contains all product attributes and related data listed on the product page |[optional]|