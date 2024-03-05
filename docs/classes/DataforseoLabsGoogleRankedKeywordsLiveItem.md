[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRankedKeywordsLiveItem

# Class: DataforseoLabsGoogleRankedKeywordsLiveItem

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRankedKeywordsLiveItem.md#constructor)

### Properties

- [keyword\_data](DataforseoLabsGoogleRankedKeywordsLiveItem.md#keyword_data)
- [ranked\_serp\_element](DataforseoLabsGoogleRankedKeywordsLiveItem.md#ranked_serp_element)
- [se\_type](DataforseoLabsGoogleRankedKeywordsLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsGoogleRankedKeywordsLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleRankedKeywordsLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleRankedKeywordsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRankedKeywordsLiveItem**(`data?`): [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Defined in

[main.ts:87046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87046)

## Properties

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#keyword_data)

#### Defined in

[main.ts:87040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87040)

___

### ranked\_serp\_element

• `Optional` **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[ranked_serp_element](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#ranked_serp_element)

#### Defined in

[main.ts:87042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87042)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveItem](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveItem.md#se_type)

#### Defined in

[main.ts:87038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87038)

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

[main.ts:87055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87055)

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

[main.ts:87074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87074)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)

#### Defined in

[main.ts:87067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87067)
