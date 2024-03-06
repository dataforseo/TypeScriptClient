[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / VisualStoriesSerpElementItem

# Class: VisualStoriesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`VisualStoriesSerpElementItem`**

## Implements

- [`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](VisualStoriesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](VisualStoriesSerpElementItem.md#_discriminator)
- [items](VisualStoriesSerpElementItem.md#items)
- [position](VisualStoriesSerpElementItem.md#position)
- [rank\_absolute](VisualStoriesSerpElementItem.md#rank_absolute)
- [rank\_group](VisualStoriesSerpElementItem.md#rank_group)
- [rectangle](VisualStoriesSerpElementItem.md#rectangle)
- [xpath](VisualStoriesSerpElementItem.md#xpath)

### Methods

- [init](VisualStoriesSerpElementItem.md#init)
- [toJSON](VisualStoriesSerpElementItem.md#tojson)
- [fromJS](VisualStoriesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new VisualStoriesSerpElementItem**(`data?`): [`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md) |

#### Returns

[`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:33307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33307)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`LicensesElement`](LicensesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IVisualStoriesSerpElementItem](../interfaces/IVisualStoriesSerpElementItem.md).[items](../interfaces/IVisualStoriesSerpElementItem.md#items)

#### Defined in

[main.ts:33299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33299)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IVisualStoriesSerpElementItem](../interfaces/IVisualStoriesSerpElementItem.md).[position](../interfaces/IVisualStoriesSerpElementItem.md#position)

#### Defined in

[main.ts:33295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33295)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IVisualStoriesSerpElementItem](../interfaces/IVisualStoriesSerpElementItem.md).[rank_absolute](../interfaces/IVisualStoriesSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:33291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33291)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IVisualStoriesSerpElementItem](../interfaces/IVisualStoriesSerpElementItem.md).[rank_group](../interfaces/IVisualStoriesSerpElementItem.md#rank_group)

#### Defined in

[main.ts:33288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33288)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IVisualStoriesSerpElementItem](../interfaces/IVisualStoriesSerpElementItem.md).[rectangle](../interfaces/IVisualStoriesSerpElementItem.md#rectangle)

#### Defined in

[main.ts:33303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33303)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IVisualStoriesSerpElementItem](../interfaces/IVisualStoriesSerpElementItem.md).[xpath](../interfaces/IVisualStoriesSerpElementItem.md#xpath)

#### Defined in

[main.ts:33297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33297)

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

[main.ts:33312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33312)

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

[main.ts:33339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33339)

___


### fromJS

▸ **fromJS**(`data`): [`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:33332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33332)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")