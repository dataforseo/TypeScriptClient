[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRelatedKeywordsLiveItem

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

[main.ts:80315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80315)

## Properties

### depth

• `Optional` **depth**: `number`

keyword search depth

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[depth](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#depth)

#### Defined in

[main.ts:80308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80308)

___

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#keyword_data)

#### Defined in

[main.ts:80306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80306)

___

### related\_keywords

• `Optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[related_keywords](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#related_keywords)

#### Defined in

[main.ts:80311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80311)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveItem.md#se_type)

#### Defined in

[main.ts:80304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80304)

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

[main.ts:80324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80324)

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

[main.ts:80348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80348)

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

[main.ts:80341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80341)
