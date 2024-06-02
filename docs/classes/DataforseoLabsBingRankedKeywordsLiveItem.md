**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingRankedKeywordsLiveItem

# Class: DataforseoLabsBingRankedKeywordsLiveItem

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRankedKeywordsLiveItem(data)

> **new DataforseoLabsBingRankedKeywordsLiveItem**(`data`?): [`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Source

main.ts:109046

## Properties

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#keyword_data)

#### Source

main.ts:109040

***

### ranked\_serp\_element?

> **`optional`** **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#ranked_serp_element)

#### Source

main.ts:109042

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#se_type)

#### Source

main.ts:109038

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:109055

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:109074

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Source

main.ts:109067
