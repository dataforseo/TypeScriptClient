**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAppleKeywordsForAppLiveItem

# Class: DataforseoLabsAppleKeywordsForAppLiveItem

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleKeywordsForAppLiveItem(data)

> **new DataforseoLabsAppleKeywordsForAppLiveItem**(`data`?): [`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Source

main.ts:116863

## Properties

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md#keyword_data)

#### Source

main.ts:116857

***

### ranked\_serp\_element?

> **`optional`** **ranked\_serp\_element**: [`ItemsRankedSerpElement`](ItemsRankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md#ranked_serp_element)

#### Source

main.ts:116859

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveItem.md#se_type)

#### Source

main.ts:116855

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:116872

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:116891

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveItem`](DataforseoLabsAppleKeywordsForAppLiveItem.md)

#### Source

main.ts:116884
