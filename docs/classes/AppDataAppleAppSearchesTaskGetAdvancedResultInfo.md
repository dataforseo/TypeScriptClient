[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppSearchesTaskGetAdvancedResultInfo

# Class: AppDataAppleAppSearchesTaskGetAdvancedResultInfo

Defined in: main.ts:205814

## Implements

- [`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTaskGetAdvancedResultInfo()

> **new AppDataAppleAppSearchesTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

Defined in: main.ts:205840

#### Parameters

##### data?

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:205825

direct URL to search engine results
in this case, the value will be null

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:205830

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:205836

found apps

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:205834

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:205816

keyword received in a POST request

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:205822

language code in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:205820

location code in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:205818

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:205832

the total number of results

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205849

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:205878

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

Defined in: main.ts:205871

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)
