[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

# Class: DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#constructor)

### Properties

- [asins](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#asins)
- [items](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo**(`data?`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Defined in

main.ts:104265

## Properties

### asins

• `Optional` **asins**: `Object`

ASINs in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[asins](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#asins)

#### Defined in

main.ts:104249

___

### items

• `Optional` **items**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveItem`](DataforseoLabsAmazonProductKeywordIntersectionsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items)

#### Defined in

main.ts:104261

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items_count)

#### Defined in

main.ts:104259

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#language_code)

#### Defined in

main.ts:104255

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#location_code)

#### Defined in

main.ts:104252

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#se_type)

#### Defined in

main.ts:104247

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#total_count)

#### Defined in

main.ts:104257

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

main.ts:104274

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

main.ts:104307

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Defined in

main.ts:104300
