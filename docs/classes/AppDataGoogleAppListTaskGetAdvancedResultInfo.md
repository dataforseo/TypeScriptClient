[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppListTaskGetAdvancedResultInfo

Defined in: main.ts:201540

## Implements

- [`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTaskGetAdvancedResultInfo()

> **new AppDataGoogleAppListTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

Defined in: main.ts:201567

#### Parameters

##### data?

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:201551

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:201556

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:201563

found apps

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:201561

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:201542

app collection received in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:201548

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:201546

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:201544

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:201558

the total number of results

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_results_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:201576

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:201605

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

Defined in: main.ts:201598

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)
