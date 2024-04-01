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

main.ts:28437

## Properties

### ad\_aclk

• `Optional` **ad\_aclk**: `string`

the identifier of the ad

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[ad_aclk](../interfaces/IAdLinkElement.md#ad_aclk)

#### Defined in

main.ts:28433

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[description](../interfaces/IAdLinkElement.md#description)

#### Defined in

main.ts:28427

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[domain](../interfaces/IAdLinkElement.md#domain)

#### Defined in

main.ts:28431

___

### title

• `Optional` **title**: `string`

title of the element

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[title](../interfaces/IAdLinkElement.md#title)

#### Defined in

main.ts:28425

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[type](../interfaces/IAdLinkElement.md#type)

#### Defined in

main.ts:28423

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IAdLinkElement](../interfaces/IAdLinkElement.md).[url](../interfaces/IAdLinkElement.md#url)

#### Defined in

main.ts:28429

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

main.ts:28446

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

main.ts:28468

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

main.ts:28461
