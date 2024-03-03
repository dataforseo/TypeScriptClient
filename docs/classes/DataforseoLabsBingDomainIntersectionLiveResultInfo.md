[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingDomainIntersectionLiveResultInfo

# Class: DataforseoLabsBingDomainIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#items)
- [items\_count](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#se_type)
- [target1](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#target1)
- [target2](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#target2)
- [total\_count](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#init)
- [toJSON](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsBingDomainIntersectionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingDomainIntersectionLiveResultInfo**(`data?`): [`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md) |

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Defined in

main.ts:103874

## Properties

### items

• `Optional` **items**: [`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[items](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:103870

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:103868

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:103864

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:103862

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:103856

___

### target1

• `Optional` **target1**: `string`

target specified in a POST array

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[target1](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target1)

#### Defined in

main.ts:103858

___

### target2

• `Optional` **target2**: `string`

target specified in a POST array

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[target2](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target2)

#### Defined in

main.ts:103860

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResultInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:103866

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

main.ts:103883

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

main.ts:103911

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Defined in

main.ts:103904
