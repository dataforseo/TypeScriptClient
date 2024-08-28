[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MerchantGoogleProductInfoTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductInfoTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductInfoTaskGetAdvancedResultInfo()

> **new MerchantGoogleProductInfoTaskGetAdvancedResultInfo**(`data`?): [`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:183218

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:183200

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:183205

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
product_info_element

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:183209

***

### items?

> `optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

items on the product page
contains all product attributes and related data listed on the product page

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:183214

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:183211

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:183197

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:183195

***

### product\_id?

> `optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#product_id)

#### Defined in

main.ts:183189

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:183193

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleProductInfoTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:183191

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:183227

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:183261

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:183254
