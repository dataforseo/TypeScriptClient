[dataforseo-client](../README.md) / [Exports](../modules.md) / HotelsPackElement

# Class: HotelsPackElement

## Implements

- [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelsPackElement.md#constructor)

### Properties

- [description](HotelsPackElement.md#description)
- [domain](HotelsPackElement.md#domain)
- [hotel\_identifier](HotelsPackElement.md#hotel_identifier)
- [is\_paid](HotelsPackElement.md#is_paid)
- [price](HotelsPackElement.md#price)
- [rating](HotelsPackElement.md#rating)
- [title](HotelsPackElement.md#title)
- [type](HotelsPackElement.md#type)
- [url](HotelsPackElement.md#url)

### Methods

- [init](HotelsPackElement.md#init)
- [toJSON](HotelsPackElement.md#tojson)
- [fromJS](HotelsPackElement.md#fromjs)

## Constructors

### constructor

• **new HotelsPackElement**(`data?`): [`HotelsPackElement`](HotelsPackElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelsPackElement`](../interfaces/IHotelsPackElement.md) |

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

#### Defined in

[main.ts:33007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33007)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[description](../interfaces/IHotelsPackElement.md#description)

#### Defined in

[main.ts:32990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32990)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[domain](../interfaces/IHotelsPackElement.md#domain)

#### Defined in

[main.ts:32996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32996)

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[hotel_identifier](../interfaces/IHotelsPackElement.md#hotel_identifier)

#### Defined in

[main.ts:32994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32994)

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[is_paid](../interfaces/IHotelsPackElement.md#is_paid)

#### Defined in

[main.ts:33000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33000)

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of booking a place for the specified dates of stay

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[price](../interfaces/IHotelsPackElement.md#price)

#### Defined in

[main.ts:32986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32986)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[rating](../interfaces/IHotelsPackElement.md#rating)

#### Defined in

[main.ts:33003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33003)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[title](../interfaces/IHotelsPackElement.md#title)

#### Defined in

[main.ts:32988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32988)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[type](../interfaces/IHotelsPackElement.md#type)

#### Defined in

[main.ts:32984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32984)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IHotelsPackElement](../interfaces/IHotelsPackElement.md).[url](../interfaces/IHotelsPackElement.md#url)

#### Defined in

[main.ts:32998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32998)

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

[main.ts:33016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33016)

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

[main.ts:33041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33041)

___

### fromJS

▸ **fromJS**(`data`): [`HotelsPackElement`](HotelsPackElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelsPackElement`](HotelsPackElement.md)

#### Defined in

[main.ts:33034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33034)
