[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleSellersTaskGetAdvancedResultInfo

# Class: MerchantGoogleSellersTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersTaskGetAdvancedResultInfo()

> **new MerchantGoogleSellersTaskGetAdvancedResultInfo**(`data`?): [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:176480

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:176453

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:176458

***

### image\_url?

> `optional` **image\_url**: `string`

URL to the product image

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`image_url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#image_url)

#### Defined in

main.ts:176464

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:176472

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

items in SERP

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:176476

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:176474

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:176450

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:176448

***

### product\_id?

> `optional` **product\_id**: `string`

product_id received in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)

#### Defined in

main.ts:176442

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#rating)

#### Defined in

main.ts:176467

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:176446

***

### title?

> `optional` **title**: `string`

title of the product

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#title)

#### Defined in

main.ts:176460

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:176444

***

### url?

> `optional` **url**: `string`

URL to the product page

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#url)

#### Defined in

main.ts:176462

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:176489

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:176527

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:176520
