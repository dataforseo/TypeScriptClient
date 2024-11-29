[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo()

> **new DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Defined in

main.ts:98013

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleCategoriesForKeywordsLiveItem`](DataforseoLabsGoogleCategoriesForKeywordsLiveItem.md)[]

contains keywords and related keyword difficulty scores

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:98009

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:98007

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:98005

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:98022

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:98045

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Defined in

main.ts:98038
