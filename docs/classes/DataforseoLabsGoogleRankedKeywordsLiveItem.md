**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRankedKeywordsLiveItem

# Class: DataforseoLabsGoogleRankedKeywordsLiveItem

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRankedKeywordsLiveItem(data)

> **new DataforseoLabsGoogleRankedKeywordsLiveItem**(`data`?): [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Source

main.ts:92517

## Properties

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#keyword_data)

#### Source

main.ts:92511

***

### ranked\_serp\_element?

> **`optional`** **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#ranked_serp_element)

#### Source

main.ts:92513

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#se_type)

#### Source

main.ts:92509

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:92526

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:92545

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Source

main.ts:92538
