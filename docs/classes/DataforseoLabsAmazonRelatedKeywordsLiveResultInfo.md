[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsAmazonRelatedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#se_type)
- [seed\_keyword](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword)
- [seed\_keyword\_data](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword_data)
- [total\_count](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRelatedKeywordsLiveResultInfo**(`data?`): [`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:99525

## Properties

### items

• `Optional` **items**: [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)[]

contains objects with keywords and related data

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:99521

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:99519

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:99515

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:99513

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#se_type)

#### Defined in

main.ts:99506

___

### seed\_keyword

• `Optional` **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[seed_keyword](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword)

#### Defined in

main.ts:99508

___

### seed\_keyword\_data

• `Optional` **seed\_keyword\_data**: [`AmazonKeywordData`](AmazonKeywordData.md)

keyword data for the seed keyword
fields in the object are identical to that of keyword_data

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[seed_keyword_data](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

#### Defined in

main.ts:99511

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#total_count)

#### Defined in

main.ts:99517

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

main.ts:99534

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

main.ts:99562

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:99555
