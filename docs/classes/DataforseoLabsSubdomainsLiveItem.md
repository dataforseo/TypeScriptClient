[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsSubdomainsLiveItem

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

[main.ts:89628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89628)

## Properties

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to subdomain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsSubdomainsLiveItem](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[metrics](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#metrics)

#### Defined in

[main.ts:89624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89624)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsSubdomainsLiveItem](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[se_type](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#se_type)

#### Defined in

[main.ts:89620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89620)

___

### subdomain

• `Optional` **subdomain**: `string`

returned subdomain

#### Implementation of

[IDataforseoLabsSubdomainsLiveItem](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[subdomain](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#subdomain)

#### Defined in

[main.ts:89622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89622)

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

[main.ts:89637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89637)

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

[main.ts:89662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89662)

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

[main.ts:89655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89655)
