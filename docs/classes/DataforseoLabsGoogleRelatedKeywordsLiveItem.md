**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelatedKeywordsLiveItem

# Class: DataforseoLabsGoogleRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelatedKeywordsLiveItem(data)

> **new DataforseoLabsGoogleRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Source

main.ts:83780

## Properties

### depth?

> **`optional`** **depth**: `number`

keyword search depth

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#depth)

#### Source

main.ts:83773

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#keyword_data)

#### Source

main.ts:83771

***

### related\_keywords?

> **`optional`** **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#related_keywords)

#### Source

main.ts:83776

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#se_type)

#### Source

main.ts:83769

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:83789

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:83813

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Source

main.ts:83806
