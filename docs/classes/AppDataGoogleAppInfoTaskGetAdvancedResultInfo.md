**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppInfoTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppInfoTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTaskGetAdvancedResultInfo(data)

> **new AppDataGoogleAppInfoTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Source

main.ts:187940

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

application id received in a POST request

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#app_id)

#### Source

main.ts:187916

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:187925

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:187930

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found app info

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:187936

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:187934

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:187922

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:187920

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:187918

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:187932

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:187949

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:187978

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Source

main.ts:187971
