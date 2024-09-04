[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleRankedKeywordsLiveItem

# Class: DataforseoLabsGoogleRankedKeywordsLiveItem

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRankedKeywordsLiveItem()

> **new DataforseoLabsGoogleRankedKeywordsLiveItem**(`data`?): [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Defined in

main.ts:91707

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:91701

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#ranked_serp_element)

#### Defined in

main.ts:91703

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:91699

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:91716

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:91735

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Defined in

main.ts:91728
