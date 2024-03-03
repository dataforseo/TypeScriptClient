[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsSubdomainsLiveItem

# Class: DataforseoLabsSubdomainsLiveItem

## Implements

- [`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsSubdomainsLiveItem.md#constructor)

### Properties

- [metrics](DataforseoLabsSubdomainsLiveItem.md#metrics)
- [se\_type](DataforseoLabsSubdomainsLiveItem.md#se_type)
- [subdomain](DataforseoLabsSubdomainsLiveItem.md#subdomain)

### Methods

- [init](DataforseoLabsSubdomainsLiveItem.md#init)
- [toJSON](DataforseoLabsSubdomainsLiveItem.md#tojson)
- [fromJS](DataforseoLabsSubdomainsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsSubdomainsLiveItem**(`data?`): [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md) |

#### Returns

[`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Defined in

main.ts:89772

## Properties

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to subdomain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsSubdomainsLiveItem](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[metrics](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#metrics)

#### Defined in

main.ts:89768

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsSubdomainsLiveItem](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[se_type](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#se_type)

#### Defined in

main.ts:89764

___

### subdomain

• `Optional` **subdomain**: `string`

returned subdomain

#### Implementation of

[IDataforseoLabsSubdomainsLiveItem](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[subdomain](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#subdomain)

#### Defined in

main.ts:89766

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

main.ts:89781

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

main.ts:89806

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)

#### Defined in

main.ts:89799
