[Documentation](../README.md) / [Exports](../modules.md) / AdLinkElement

# Class: AdLinkElement

## Implements

- [`IAdLinkElement`](../interfaces/IAdLinkElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AdLinkElement.md#constructor)

### Properties

- [ad\_aclk](AdLinkElement.md#ad_aclk)
- [description](AdLinkElement.md#description)
- [domain](AdLinkElement.md#domain)
- [title](AdLinkElement.md#title)
- [type](AdLinkElement.md#type)
- [url](AdLinkElement.md#url)

### Methods

- [init](AdLinkElement.md#init)
- [toJSON](AdLinkElement.md#tojson)
- [fromJS](AdLinkElement.md#fromjs)

## Constructors

### constructor

• **new AdLinkElement**(`data?`): [`AdLinkElement`](AdLinkElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAdLinkElement`](../interfaces/IAdLinkElement.md) |

#### Returns

[`AdLinkElement`](AdLinkElement.md)

#### Defined in

main.ts:27830

## Properties

### ad\_aclk

• `Optional` **ad\_aclk**: `string`

the identifier of the ad

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[ad_aclk](../interfaces/IAdLinkElement.md#ad_aclk)

#### Defined in

main.ts:27826

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[description](../interfaces/IAdLinkElement.md#description)

#### Defined in

main.ts:27820

___

### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[domain](../interfaces/IAdLinkElement.md#domain)

#### Defined in

main.ts:27824

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[title](../interfaces/IAdLinkElement.md#title)

#### Defined in

main.ts:27818

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[type](../interfaces/IAdLinkElement.md#type)

#### Defined in

main.ts:27816

___

### url

• `Optional` **url**: `string`

relevant URL

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[url](../interfaces/IAdLinkElement.md#url)

#### Defined in

main.ts:27822

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

main.ts:27839

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

main.ts:27861

___

### fromJS

▸ **fromJS**(`data`): [`AdLinkElement`](AdLinkElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AdLinkElement`](AdLinkElement.md)

#### Defined in

main.ts:27854
