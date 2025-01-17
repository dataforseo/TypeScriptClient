[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsRelatedKeywordsLiveItem

# Class: DataforseoLabsRelatedKeywordsLiveItem

Defined in: main.ts:93998

## Implements

- [`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsRelatedKeywordsLiveItem()

> **new DataforseoLabsRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

Defined in: main.ts:94011

#### Parameters

##### data?

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:94004

keyword search depth

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#depth)

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:94002

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#keyword_data)

***

### related\_keywords?

> `optional` **related\_keywords**: `string`[]

Defined in: main.ts:94007

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#related_keywords)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:94000

search engine type

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:94020

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:94044

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

Defined in: main.ts:94037

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)
