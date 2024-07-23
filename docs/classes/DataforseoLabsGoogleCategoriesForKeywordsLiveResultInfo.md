**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo(data)

> **new DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Source

main.ts:89026

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleCategoriesForKeywordsLiveItem`](DataforseoLabsGoogleCategoriesForKeywordsLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#items)

#### Source

main.ts:89022

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#items_count)

#### Source

main.ts:89020

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#language_code)

#### Source

main.ts:89018

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:89035

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:89058

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Source

main.ts:89051
