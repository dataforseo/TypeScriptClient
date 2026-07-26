# BaseMerchantAmazonSellersElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | position within a group of elements with identical type values. positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in SERP. absolute position among all the elements found in Amazon Sellers SERP |[optional]|
**position** | **string** | alignment of the element in SERP. possible values:. left, right |[optional]|
**xpath** | **string** | XPath of the element |[optional]|
**seller_name** | **string** | business name of the seller |[optional]|
**seller_url** | **string** | url forwarding to the seller’s page on Amazon |[optional]|
**ships_from** | **string** | sender company name |[optional]|
**price** | **PriceInfo** | product pricing details. if there are no details, the value will be null |[optional]|
**percentage_discount** | **number** | value of the percentage discount |[optional]|
**applicable_vouchers** | **AmazonApplicableVouchersItem[]** | array of objects containing information about applicable vouchers |[optional]|
**rating** | **RatingElement** | seller rating details. seller popularity rate based on customer reviews |[optional]|
**condition** | **string** | product condition. condition of the product offered by the seller |[optional]|
**condition_description** | **string** | product condition details. expanded details on the condition of the product offered by the seller |[optional]|
**delivery_info** | **AmazonDeliveryInfo** | delivery information. delivery information including free and fast delivery date ranges |[optional]|