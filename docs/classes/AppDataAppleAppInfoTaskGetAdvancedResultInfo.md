[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppleAppInfoTaskGetAdvancedResultInfo

# Class: AppDataAppleAppInfoTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppInfoTaskGetAdvancedResultInfo()

> **new AppDataAppleAppInfoTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:198975

## Properties

### app\_id?

> `optional` **app\_id**: `string`

application id received in a POST request

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#app_id)

#### Defined in

main.ts:198951

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:198960

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:198965

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found app info

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:198971

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:198969

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:198957

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:198955

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:198953

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:198967

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:198984

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:199013

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:199006
