[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsRelatedKeywordsLiveItem

# Class: DataforseoLabsRelatedKeywordsLiveItem

Defined in: main.ts:94044

## Implements

- [`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsRelatedKeywordsLiveItem()

> **new DataforseoLabsRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

Defined in: main.ts:94057

#### Parameters

##### data?

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:94050

keyword search depth

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#depth)

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:94048

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#keyword_data)

***

### related\_keywords?

> `optional` **related\_keywords**: `string`[]

Defined in: main.ts:94053

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#related_keywords)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:94046

search engine type

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:94066

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:94090

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

Defined in: main.ts:94083

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)
