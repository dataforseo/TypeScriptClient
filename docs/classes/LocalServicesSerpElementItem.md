[dataforseo-client](../README.md) / [Exports](../modules.md) / LocalServicesSerpElementItem

# Class: LocalServicesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`LocalServicesSerpElementItem`**

## Implements

- [`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalServicesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](LocalServicesSerpElementItem.md#_discriminator)
- [domain](LocalServicesSerpElementItem.md#domain)
- [items](LocalServicesSerpElementItem.md#items)
- [position](LocalServicesSerpElementItem.md#position)
- [rank\_absolute](LocalServicesSerpElementItem.md#rank_absolute)
- [rank\_group](LocalServicesSerpElementItem.md#rank_group)
- [rectangle](LocalServicesSerpElementItem.md#rectangle)
- [title](LocalServicesSerpElementItem.md#title)
- [url](LocalServicesSerpElementItem.md#url)
- [xpath](LocalServicesSerpElementItem.md#xpath)

### Methods

- [init](LocalServicesSerpElementItem.md#init)
- [toJSON](LocalServicesSerpElementItem.md#tojson)
- [fromJS](LocalServicesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new LocalServicesSerpElementItem**(`data?`): [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md) |

#### Returns

[`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:33697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33697)

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

domain where a link points

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[domain](../interfaces/ILocalServicesSerpElementItem.md#domain)

#### Defined in

[main.ts:33687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33687)

___

### items

• `Optional` **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[items](../interfaces/ILocalServicesSerpElementItem.md#items)

#### Defined in

[main.ts:33689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33689)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[position](../interfaces/ILocalServicesSerpElementItem.md#position)

#### Defined in

[main.ts:33679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33679)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[rank_absolute](../interfaces/ILocalServicesSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:33675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33675)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[rank_group](../interfaces/ILocalServicesSerpElementItem.md#rank_group)

#### Defined in

[main.ts:33672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33672)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[rectangle](../interfaces/ILocalServicesSerpElementItem.md#rectangle)

#### Defined in

[main.ts:33693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33693)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[title](../interfaces/ILocalServicesSerpElementItem.md#title)

#### Defined in

[main.ts:33683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33683)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[url](../interfaces/ILocalServicesSerpElementItem.md#url)

#### Defined in

[main.ts:33685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33685)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ILocalServicesSerpElementItem](../interfaces/ILocalServicesSerpElementItem.md).[xpath](../interfaces/ILocalServicesSerpElementItem.md#xpath)

#### Defined in

[main.ts:33681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33681)

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

[main.ts:33702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33702)

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

[main.ts:33732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33732)

___

### fromJS

▸ **fromJS**(`data`): [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:33725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33725)
