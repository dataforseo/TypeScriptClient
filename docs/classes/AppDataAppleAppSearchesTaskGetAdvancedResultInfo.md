**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppSearchesTaskGetAdvancedResultInfo

# Class: AppDataAppleAppSearchesTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTaskGetAdvancedResultInfo(data)

> **new AppDataAppleAppSearchesTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Source

main.ts:192992

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:192977

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:192982

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:192988

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:192986

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST request

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:192968

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:192974

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:192972

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:192970

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:192984

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:193001

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:193030

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Source

main.ts:193023
