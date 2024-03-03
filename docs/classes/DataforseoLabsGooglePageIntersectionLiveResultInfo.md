[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGooglePageIntersectionLiveResultInfo

# Class: DataforseoLabsGooglePageIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#constructor)

### Properties

- [exclude\_pages](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#exclude_pages)
- [items](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#location_code)
- [pages](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#pages)
- [se\_type](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGooglePageIntersectionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGooglePageIntersectionLiveResultInfo**(`data?`): [`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGooglePageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:97380

## Properties

### exclude\_pages

• `Optional` **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[exclude_pages](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#exclude_pages)

#### Defined in

main.ts:97366

___

### items

• `Optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:97376

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:97374

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:97370

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:97368

___

### pages

• `Optional` **pages**: `Object`

URLs you specified a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[pages](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#pages)

#### Defined in

main.ts:97364

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:97362

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGooglePageIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:97372

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

main.ts:97389

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

main.ts:97427

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveResultInfo`](DataforseoLabsGooglePageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:97420
