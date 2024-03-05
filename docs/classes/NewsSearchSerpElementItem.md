[dataforseo-client](../README.md) / [Exports](../modules.md) / NewsSearchSerpElementItem

# Class: NewsSearchSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`NewsSearchSerpElementItem`**

## Implements

- [`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](NewsSearchSerpElementItem.md#constructor)

### Properties

- [\_discriminator](NewsSearchSerpElementItem.md#_discriminator)
- [domain](NewsSearchSerpElementItem.md#domain)
- [image\_url](NewsSearchSerpElementItem.md#image_url)
- [rank\_absolute](NewsSearchSerpElementItem.md#rank_absolute)
- [rank\_group](NewsSearchSerpElementItem.md#rank_group)
- [rectangle](NewsSearchSerpElementItem.md#rectangle)
- [snippet](NewsSearchSerpElementItem.md#snippet)
- [time\_published](NewsSearchSerpElementItem.md#time_published)
- [timestamp](NewsSearchSerpElementItem.md#timestamp)
- [title](NewsSearchSerpElementItem.md#title)
- [url](NewsSearchSerpElementItem.md#url)
- [xpath](NewsSearchSerpElementItem.md#xpath)

### Methods

- [init](NewsSearchSerpElementItem.md#init)
- [toJSON](NewsSearchSerpElementItem.md#tojson)
- [fromJS](NewsSearchSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new NewsSearchSerpElementItem**(`data?`): [`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`INewsSearchSerpElementItem`](../interfaces/INewsSearchSerpElementItem.md) |

#### Returns

[`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:42523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42523)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### domain

• `Optional` **domain**: `string`

domain name of the result in SERP

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[domain](../interfaces/INewsSearchSerpElementItem.md#domain)

#### Defined in

[main.ts:42499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42499)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[image_url](../interfaces/INewsSearchSerpElementItem.md#image_url)

#### Defined in

[main.ts:42506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42506)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[rank_absolute](../interfaces/INewsSearchSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:42495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42495)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[rank_group](../interfaces/INewsSearchSerpElementItem.md#rank_group)

#### Defined in

[main.ts:42492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42492)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[rectangle](../interfaces/INewsSearchSerpElementItem.md#rectangle)

#### Defined in

[main.ts:42519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42519)

___

### snippet

• `Optional` **snippet**: `string`

snippet of the result in SERP

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[snippet](../interfaces/INewsSearchSerpElementItem.md#snippet)

#### Defined in

[main.ts:42508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42508)

___

### time\_published

• `Optional` **time\_published**: `string`

indicates the time the result was published

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[time_published](../interfaces/INewsSearchSerpElementItem.md#time_published)

#### Defined in

[main.ts:42510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42510)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[timestamp](../interfaces/INewsSearchSerpElementItem.md#timestamp)

#### Defined in

[main.ts:42515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42515)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[title](../interfaces/INewsSearchSerpElementItem.md#title)

#### Defined in

[main.ts:42501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42501)

___

### url

• `Optional` **url**: `string`

URL of the result in SERP

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[url](../interfaces/INewsSearchSerpElementItem.md#url)

#### Defined in

[main.ts:42503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42503)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[INewsSearchSerpElementItem](../interfaces/INewsSearchSerpElementItem.md).[xpath](../interfaces/INewsSearchSerpElementItem.md#xpath)

#### Defined in

[main.ts:42497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42497)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:42528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42528)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:42556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42556)

___

### fromJS

▸ **fromJS**(`data`): [`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:42549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42549)
