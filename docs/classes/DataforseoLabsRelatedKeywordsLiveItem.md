[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsRelatedKeywordsLiveItem

# Class: DataforseoLabsRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsRelatedKeywordsLiveItem()

> **new DataforseoLabsRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:93943

## Properties

### depth?

> `optional` **depth**: `number`

keyword search depth

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#depth)

#### Defined in

main.ts:93936

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:93934

***

### related\_keywords?

> `optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#related_keywords)

#### Defined in

main.ts:93939

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsRelatedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:93932

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:93952

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:93976

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsRelatedKeywordsLiveItem`](DataforseoLabsRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:93969
