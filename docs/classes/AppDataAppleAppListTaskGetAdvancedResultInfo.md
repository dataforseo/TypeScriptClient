**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppListTaskGetAdvancedResultInfo

# Class: AppDataAppleAppListTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTaskGetAdvancedResultInfo(data)

> **new AppDataAppleAppListTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Source

main.ts:191915

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:191898

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:191903

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:191911

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:191908

***

### keyword?

> **`optional`** **keyword**: `string`

app collection received in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:191889

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:191895

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:191893

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:191891

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:191905

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:191924

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:191953

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Source

main.ts:191946
