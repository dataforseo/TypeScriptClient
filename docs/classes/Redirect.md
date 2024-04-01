[Documentation](../README.md) / [Exports](../modules.md) / Redirect

# Class: Redirect

## Implements

- [`IRedirect`](../interfaces/IRedirect.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Redirect.md#constructor)

### Properties

- [status\_code](Redirect.md#status_code)
- [type](Redirect.md#type)
- [url](Redirect.md#url)

### Methods

- [init](Redirect.md#init)
- [toJSON](Redirect.md#tojson)
- [fromJS](Redirect.md#fromjs)

## Constructors

### constructor

• **new Redirect**(`data?`): [`Redirect`](Redirect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRedirect`](../interfaces/IRedirect.md) |

#### Returns

[`Redirect`](Redirect.md)

#### Defined in

main.ts:136340

## Properties

### status\_code

• `Optional` **status\_code**: `number`

HTTP status code of the URL

#### Implementation of

[IRedirect](../interfaces/IRedirect.md).[status_code](../interfaces/IRedirect.md#status_code)

#### Defined in

main.ts:136334

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IRedirect](../interfaces/IRedirect.md).[type](../interfaces/IRedirect.md#type)

#### Defined in

main.ts:136332

___

### url

• `Optional` **url**: `string`

indirect link URL

#### Implementation of

[IRedirect](../interfaces/IRedirect.md).[url](../interfaces/IRedirect.md#url)

#### Defined in

main.ts:136336

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

main.ts:136349

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

main.ts:136368

___

### fromJS

▸ **fromJS**(`data`): [`Redirect`](Redirect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Redirect`](Redirect.md)

#### Defined in

main.ts:136361
