[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleRelatedKeywordsLiveItem

# Class: DataforseoLabsGoogleRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelatedKeywordsLiveItem()

> **new DataforseoLabsGoogleRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:84196

## Properties

### depth?

> `optional` **depth**: `number`

keyword search depth

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#depth)

#### Defined in

main.ts:84189

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:84187

***

### related\_keywords?

> `optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#related_keywords)

#### Defined in

main.ts:84192

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:84185

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:84205

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:84229

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:84222
