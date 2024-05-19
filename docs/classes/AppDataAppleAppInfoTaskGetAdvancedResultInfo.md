**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppInfoTaskGetAdvancedResultInfo

# Class: AppDataAppleAppInfoTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppInfoTaskGetAdvancedResultInfo(data)

> **new AppDataAppleAppInfoTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Source

main.ts:192489

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

application id received in a POST request

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#app_id)

#### Source

main.ts:192465

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:192474

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:192479

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found app info

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:192485

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:192483

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:192471

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:192469

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:192467

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:192481

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:192498

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:192527

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Source

main.ts:192520
