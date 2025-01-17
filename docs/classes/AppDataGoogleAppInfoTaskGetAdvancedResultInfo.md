[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppInfoTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppInfoTaskGetAdvancedResultInfo

Defined in: main.ts:202350

## Implements

- [`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTaskGetAdvancedResultInfo()

> **new AppDataGoogleAppInfoTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:202376

#### Parameters

##### data?

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:202352

application id received in a POST request

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#app_id)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:202361

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:202366

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:202372

found app info

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:202370

the number of items in the results array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:202358

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:202356

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:202354

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:202368

the total number of results

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:202385

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:202414

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:202407

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)
