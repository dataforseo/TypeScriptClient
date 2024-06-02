**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRelatedKeywordsLiveItem

# Class: DataforseoLabsAmazonRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRelatedKeywordsLiveItem(data)

> **new DataforseoLabsAmazonRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Source

main.ts:102863

## Properties

### depth?

> **`optional`** **depth**: `number`

keyword search depth

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#depth)

#### Source

main.ts:102856

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`AmazonKeywordData`](AmazonKeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#keyword_data)

#### Source

main.ts:102854

***

### related\_keywords?

> **`optional`** **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#related_keywords)

#### Source

main.ts:102859

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#se_type)

#### Source

main.ts:102852

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:102872

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:102896

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Source

main.ts:102889
