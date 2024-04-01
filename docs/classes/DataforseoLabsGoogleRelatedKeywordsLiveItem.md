[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRelatedKeywordsLiveItem

# Class: DataforseoLabsGoogleRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRelatedKeywordsLiveItem.md#constructor)

### Properties

- [depth](DataforseoLabsGoogleRelatedKeywordsLiveItem.md#depth)
- [keyword\_data](DataforseoLabsGoogleRelatedKeywordsLiveItem.md#keyword_data)
- [related\_keywords](DataforseoLabsGoogleRelatedKeywordsLiveItem.md#related_keywords)
- [se\_type](DataforseoLabsGoogleRelatedKeywordsLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsGoogleRelatedKeywordsLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleRelatedKeywordsLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleRelatedKeywordsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRelatedKeywordsLiveItem**(`data?`): [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:82692

## Properties

### depth

• `Optional` **depth**: `number`

keyword search depth

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[depth](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#depth)

#### Defined in

main.ts:82685

___

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:82683

___

### related\_keywords

• `Optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[related_keywords](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#related_keywords)

#### Defined in

main.ts:82688

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:82681

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:82701

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:82725

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveItem`](DataforseoLabsGoogleRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:82718
