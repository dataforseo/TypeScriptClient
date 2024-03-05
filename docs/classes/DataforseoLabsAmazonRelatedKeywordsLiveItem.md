[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRelatedKeywordsLiveItem

# Class: DataforseoLabsAmazonRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#constructor)

### Properties

- [depth](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#depth)
- [keyword\_data](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#keyword_data)
- [related\_keywords](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#related_keywords)
- [se\_type](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#init)
- [toJSON](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#tojson)
- [fromJS](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRelatedKeywordsLiveItem**(`data?`): [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md) |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Defined in

[main.ts:99295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99295)

## Properties

### depth

• `Optional` **depth**: `number`

keyword search depth

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[depth](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#depth)

#### Defined in

[main.ts:99288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99288)

___

### keyword\_data

• `Optional` **keyword\_data**: [`AmazonKeywordData`](AmazonKeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#keyword_data)

#### Defined in

[main.ts:99286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99286)

___

### related\_keywords

• `Optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[related_keywords](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#related_keywords)

#### Defined in

[main.ts:99291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99291)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[se_type](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#se_type)

#### Defined in

[main.ts:99284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99284)

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

[main.ts:99304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99304)

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

[main.ts:99328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99328)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Defined in

[main.ts:99321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99321)
