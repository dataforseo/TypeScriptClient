**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppListTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppListTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTaskGetAdvancedResultInfo(data)

> **new AppDataGoogleAppListTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Source

main.ts:188145

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:188129

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:188134

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:188141

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:188139

***

### keyword?

> **`optional`** **keyword**: `string`

app collection received in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:188120

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:188126

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:188124

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:188122

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:188136

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:188154

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:188183

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Source

main.ts:188176
