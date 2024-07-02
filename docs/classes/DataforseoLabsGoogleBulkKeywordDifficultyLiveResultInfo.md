**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo(data)

> **new DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo**(`data`?): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

#### Source

main.ts:86634

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#items)

#### Source

main.ts:86630

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#items_count)

#### Source

main.ts:86628

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#language_code)

#### Source

main.ts:86624

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#location_code)

#### Source

main.ts:86621

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#se_type)

#### Source

main.ts:86618

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md#total_count)

#### Source

main.ts:86626

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:86643

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:86669

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)

#### Source

main.ts:86662
