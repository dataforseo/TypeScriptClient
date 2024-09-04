[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo()

> **new DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo**(`data`?): [`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Defined in

main.ts:108583

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items)

#### Defined in

main.ts:108579

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#items_count)

#### Defined in

main.ts:108577

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#language_code)

#### Defined in

main.ts:108573

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#location_code)

#### Defined in

main.ts:108570

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#se_type)

#### Defined in

main.ts:108567

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md#total_count)

#### Defined in

main.ts:108575

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:108592

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:108618

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)

#### Defined in

main.ts:108611
