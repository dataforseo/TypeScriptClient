**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductSpecTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskGetAdvancedResultInfo(data)

> **new MerchantGoogleProductSpecTaskGetAdvancedResultInfo**(`data`?): [`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Source

main.ts:173422

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:173404

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:173409

***

### description?

> **`optional`** **description**: `string`

description of the product

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`description`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#description)

#### Source

main.ts:173397

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the product image

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`image_url`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#image_url)

#### Source

main.ts:173399

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
shopping_specification

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:173413

***

### items?

> **`optional`** **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

items on the product specification page
contains all product attributes and related data listed on the product specification page

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:173418

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:173415

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:173393

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:173391

***

### product\_id?

> **`optional`** **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#product_id)

#### Source

main.ts:173385

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:173389

***

### tags?

> **`optional`** **tags**: `string`[]

tags of the product

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`tags`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#tags)

#### Source

main.ts:173401

***

### title?

> **`optional`** **title**: `string`

title of the product

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#title)

#### Source

main.ts:173395

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:173387

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:173431

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:173473

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Source

main.ts:173466
