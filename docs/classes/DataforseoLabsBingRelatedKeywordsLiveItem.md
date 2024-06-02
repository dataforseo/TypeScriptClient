**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingRelatedKeywordsLiveItem

# Class: DataforseoLabsBingRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRelatedKeywordsLiveItem(data)

> **new DataforseoLabsBingRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Source

main.ts:109683

## Properties

### depth?

> **`optional`** **depth**: `number`

keyword search depth

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md#depth)

#### Source

main.ts:109676

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md#keyword_data)

#### Source

main.ts:109674

***

### related\_keywords?

> **`optional`** **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md#related_keywords)

#### Source

main.ts:109679

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md#se_type)

#### Source

main.ts:109672

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:109692

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:109716

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Source

main.ts:109709
