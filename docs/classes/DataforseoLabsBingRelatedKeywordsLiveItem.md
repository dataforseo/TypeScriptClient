[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingRelatedKeywordsLiveItem

# Class: DataforseoLabsBingRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRelatedKeywordsLiveItem()

> **new DataforseoLabsBingRelatedKeywordsLiveItem**(`data`?): [`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:109578

## Properties

### depth?

> `optional` **depth**: `number`

keyword search depth

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md).[`depth`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md#depth)

#### Defined in

main.ts:109571

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:109569

***

### related\_keywords?

> `optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md).[`related_keywords`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md#related_keywords)

#### Defined in

main.ts:109574

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:109567

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:109587

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:109611

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:109604
