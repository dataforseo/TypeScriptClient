[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsBingRankedKeywordsLiveItem

# Class: DataforseoLabsBingRankedKeywordsLiveItem

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRankedKeywordsLiveItem()

> **new DataforseoLabsBingRankedKeywordsLiveItem**(`data`?): [`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Defined in

main.ts:111807

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:111801

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#ranked_serp_element)

#### Defined in

main.ts:111803

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:111799

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:111816

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:111835

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Defined in

main.ts:111828
