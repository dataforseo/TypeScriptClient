[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataAppleAppSearchesTaskGetAdvancedResultInfo

# Class: AppDataAppleAppSearchesTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTaskGetAdvancedResultInfo()

> **new AppDataAppleAppSearchesTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:197947

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:197932

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:197937

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:197943

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:197941

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST request

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:197923

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:197929

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:197927

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:197925

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:197939

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:197956

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:197985

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:197978
