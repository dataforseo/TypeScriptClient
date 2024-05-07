**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsleKeywordsForAppLiveItem

# Class: DataforseoLabsleKeywordsForAppLiveItem

## Implements

- [`IDataforseoLabsleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsleKeywordsForAppLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsleKeywordsForAppLiveItem(data)

> **new DataforseoLabsleKeywordsForAppLiveItem**(`data`?): [`DataforseoLabsleKeywordsForAppLiveItem`](DataforseoLabsleKeywordsForAppLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsleKeywordsForAppLiveItem.md)

#### Returns

[`DataforseoLabsleKeywordsForAppLiveItem`](DataforseoLabsleKeywordsForAppLiveItem.md)

#### Source

main.ts:112245

## Properties

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsleKeywordsForAppLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsleKeywordsForAppLiveItem.md#keyword_data)

#### Source

main.ts:112239

***

### ranked\_serp\_element?

> **`optional`** **ranked\_serp\_element**: [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsleKeywordsForAppLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsleKeywordsForAppLiveItem.md#ranked_serp_element)

#### Source

main.ts:112241

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsleKeywordsForAppLiveItem`](../interfaces/IDataforseoLabsleKeywordsForAppLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsleKeywordsForAppLiveItem.md#se_type)

#### Source

main.ts:112237

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:112254

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:112273

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsleKeywordsForAppLiveItem`](DataforseoLabsleKeywordsForAppLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsleKeywordsForAppLiveItem`](DataforseoLabsleKeywordsForAppLiveItem.md)

#### Source

main.ts:112266
