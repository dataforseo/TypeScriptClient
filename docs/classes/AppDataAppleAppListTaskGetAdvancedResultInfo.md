[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataAppleAppListTaskGetAdvancedResultInfo

# Class: AppDataAppleAppListTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTaskGetAdvancedResultInfo()

> **new AppDataAppleAppListTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:199755

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:199738

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:199743

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:199751

***

### items\_count?

> `optional` **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:199748

***

### keyword?

> `optional` **keyword**: `string`

app collection received in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:199729

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:199735

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:199733

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:199731

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:199745

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:199764

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:199793

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:199786
