[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppInfoTaskGetAdvancedResultInfo

# Class: AppDataAppleAppInfoTaskGetAdvancedResultInfo

Defined in: main.ts:207312

## Implements

- [`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppInfoTaskGetAdvancedResultInfo()

> **new AppDataAppleAppInfoTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:207338

#### Parameters

##### data?

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:207314

application id received in a POST request

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#app_id)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:207323

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:207328

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

Defined in: main.ts:207334

found app info

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:207332

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:207320

language code in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:207318

location code in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:207316

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:207330

the total number of results

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:207347

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:207376

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:207369

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)
