[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingPageIntersectionLiveResultInfo

# Class: DataforseoLabsBingPageIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingPageIntersectionLiveResultInfo.md#constructor)

### Properties

- [exclude\_pages](DataforseoLabsBingPageIntersectionLiveResultInfo.md#exclude_pages)
- [items](DataforseoLabsBingPageIntersectionLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingPageIntersectionLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingPageIntersectionLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingPageIntersectionLiveResultInfo.md#location_code)
- [pages](DataforseoLabsBingPageIntersectionLiveResultInfo.md#pages)
- [se\_type](DataforseoLabsBingPageIntersectionLiveResultInfo.md#se_type)
- [total\_count](DataforseoLabsBingPageIntersectionLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingPageIntersectionLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingPageIntersectionLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingPageIntersectionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingPageIntersectionLiveResultInfo**(`data?`): [`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingPageIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:104890

## Properties

### exclude\_pages

• `Optional` **exclude\_pages**: `string`[]

URLs you specified in a POST array that will be excluded from the results

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[exclude_pages](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#exclude_pages)

#### Defined in

main.ts:104876

___

### items

• `Optional` **items**: [`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:104886

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:104884

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:104880

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:104878

___

### pages

• `Optional` **pages**: `Object`

URLs you specified a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[pages](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#pages)

#### Defined in

main.ts:104874

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:104872

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingPageIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:104882

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

main.ts:104899

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

main.ts:104937

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResultInfo`](DataforseoLabsBingPageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:104930
