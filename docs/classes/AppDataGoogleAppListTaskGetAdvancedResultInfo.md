[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGoogleAppListTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppListTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTaskGetAdvancedResultInfo()

> **new AppDataGoogleAppListTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:188628

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:188612

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:188617

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:188624

***

### items\_count?

> `optional` **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:188622

***

### keyword?

> `optional` **keyword**: `string`

app collection received in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:188603

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:188609

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:188607

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:188605

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:188619

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:188637

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:188666

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:188659
