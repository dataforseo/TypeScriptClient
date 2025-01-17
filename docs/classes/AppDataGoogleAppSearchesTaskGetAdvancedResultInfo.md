[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppSearchesTaskGetAdvancedResultInfo

Defined in: main.ts:200024

## Implements

- [`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTaskGetAdvancedResultInfo()

> **new AppDataGoogleAppSearchesTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

Defined in: main.ts:200050

#### Parameters

##### data?

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:200035

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:200040

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:200046

found apps

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:200044

the number of items in the results array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:200026

keyword received in a POST request

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:200032

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:200030

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:200028

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:200042

the total number of results

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:200059

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:200088

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

Defined in: main.ts:200081

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)
