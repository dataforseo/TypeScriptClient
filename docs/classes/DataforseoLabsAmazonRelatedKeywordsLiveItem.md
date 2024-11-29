[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRelatedKeywordsLiveItem

# Class: DataforseoLabsAmazonRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRelatedKeywordsLiveItem()

> **new DataforseoLabsAmazonRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:112443

## Properties

### depth?

> `optional` **depth**: `number`

keyword search depth

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#depth)

#### Defined in

main.ts:112436

***

### keyword\_data?

> `optional` **keyword\_data**: [`AmazonKeywordData`](AmazonKeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:112434

***

### related\_keywords?

> `optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#related_keywords)

#### Defined in

main.ts:112439

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:112432

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:112452

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:112476

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:112469
