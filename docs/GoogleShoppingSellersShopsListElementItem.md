# GoogleShoppingSellersShopsListElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**price_multiplier** | **number** | *monthly price multiplier*. indicates the number of months covered by the monthly payment for the product |[optional]|
**displayed_payment_breakdown** | **string** | *installment details as displayed in the results*. shows how the product price can be broken down into monthly payments, if applicable |[optional]|
**rating** | **RatingElement** | *shop rating*. the shop popularity rate based on product reviews |[optional]|
**product_condition** | **string** | *indicated condition of the product*. possible values: `Used`, `Refurbished`, `New`, `Pre-owned`, `null` |[optional]|
**product_annotation** | **string** | *data from annotations and badges with special offers*. if there is no annotation for this product, the value will be `null`. examples: `LOW PRICE`, `SPECIAL OFFER`, `SALE`, `PRICE DROP` |[optional]|
**product_availability** | **string** | *product availability information*. product availability information. can take the following values: `in_stock`, `limited_stock`, `out_of_stock`, `backordered`, `pre_order_available`, `on_display_to_order` |[optional]|