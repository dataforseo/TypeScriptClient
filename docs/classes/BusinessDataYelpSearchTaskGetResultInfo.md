**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataYelpSearchTaskGetResultInfo

# Class: BusinessDataYelpSearchTaskGetResultInfo

## Implements

- [`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataYelpSearchTaskGetResultInfo(data)

> **new BusinessDataYelpSearchTaskGetResultInfo**(`data`?): [`BusinessDataYelpSearchTaskGetResultInfo`](BusinessDataYelpSearchTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md)

#### Returns

[`BusinessDataYelpSearchTaskGetResultInfo`](BusinessDataYelpSearchTaskGetResultInfo.md)

#### Source

main.ts:213277

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#check_url)

#### Source

main.ts:213257

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#datetime)

#### Source

main.ts:213262

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

item types encountered in the result
possible item types: yelp_search_organic, yelp_search_paid

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#item_types)

#### Source

main.ts:213265

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Yelp search listing results
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#items)

#### Source

main.ts:213273

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#items_count)

#### Source

main.ts:213270

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#keyword)

#### Source

main.ts:213247

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#language_code)

#### Source

main.ts:213254

***

### location\_code?

> **`optional`** **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#location_code)

#### Source

main.ts:213252

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#se_domain)

#### Source

main.ts:213249

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IBusinessDataYelpSearchTaskGetResultInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md).[`se_results_count`](../interfaces/IBusinessDataYelpSearchTaskGetResultInfo.md#se_results_count)

#### Source

main.ts:213267

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:213286

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:213320

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataYelpSearchTaskGetResultInfo`](BusinessDataYelpSearchTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataYelpSearchTaskGetResultInfo`](BusinessDataYelpSearchTaskGetResultInfo.md)

#### Source

main.ts:213313
