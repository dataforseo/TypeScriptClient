[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppSearchesTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTaskGetAdvancedResultInfo()

> **new AppDataGoogleAppSearchesTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:192085

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:192070

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:192075

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:192081

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:192079

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST request

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:192061

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:192067

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:192065

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:192063

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:192077

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:192094

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:192123

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:192116
