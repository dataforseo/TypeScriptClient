[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRankedKeywordsLiveItem

# Class: DataforseoLabsAmazonRankedKeywordsLiveItem

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRankedKeywordsLiveItem()

> **new DataforseoLabsAmazonRankedKeywordsLiveItem**(`data`?): [`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Defined in

main.ts:113286

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:113280

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

contains data on the products’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#ranked_serp_element)

#### Defined in

main.ts:113282

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:113278

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:113295

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:113314

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Defined in

main.ts:113307
