[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListTaskGetAdvancedResultInfo

# Class: AppDataAppleAppListTaskGetAdvancedResultInfo

Defined in: main.ts:208094

## Implements

- [`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTaskGetAdvancedResultInfo()

> **new AppDataAppleAppListTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

Defined in: main.ts:208122

#### Parameters

##### data?

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:208105

direct URL to search engine results
in this case, the value will be null

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:208110

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:208118

found apps
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:208115

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:208096

app collection received in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:208102

language code in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:208100

location code in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:208098

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:208112

the total number of results

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_results_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:208131

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:208160

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

Defined in: main.ts:208153

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)
