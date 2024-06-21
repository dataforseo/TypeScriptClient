**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTaskGetAdvancedResultInfo

# Class: MerchantGoogleSellersTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersTaskGetAdvancedResultInfo(data)

> **new MerchantGoogleSellersTaskGetAdvancedResultInfo**(`data`?): [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Source

main.ts:175900

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:175873

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:175878

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL to the product image

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`image_url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#image_url)

#### Source

main.ts:175884

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:175892

***

### items?

> **`optional`** **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

items in SERP

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:175896

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:175894

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:175870

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:175868

***

### product\_id?

> **`optional`** **product\_id**: `string`

product_id received in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)

#### Source

main.ts:175862

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#rating)

#### Source

main.ts:175887

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:175866

***

### title?

> **`optional`** **title**: `string`

title of the product

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#title)

#### Source

main.ts:175880

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:175864

***

### url?

> **`optional`** **url**: `string`

URL to the product page

#### Implementation of

[`IMerchantGoogleSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md).[`url`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#url)

#### Source

main.ts:175882

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:175909

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:175947

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

#### Source

main.ts:175940
