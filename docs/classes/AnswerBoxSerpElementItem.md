[Documentation](../README.md) / [Exports](../modules.md) / AnswerBoxSerpElementItem

# Class: AnswerBoxSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`AnswerBoxSerpElementItem`**

## Implements

- [`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AnswerBoxSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AnswerBoxSerpElementItem.md#_discriminator)
- [links](AnswerBoxSerpElementItem.md#links)
- [position](AnswerBoxSerpElementItem.md#position)
- [rank\_absolute](AnswerBoxSerpElementItem.md#rank_absolute)
- [rank\_group](AnswerBoxSerpElementItem.md#rank_group)
- [rectangle](AnswerBoxSerpElementItem.md#rectangle)
- [text](AnswerBoxSerpElementItem.md#text)
- [xpath](AnswerBoxSerpElementItem.md#xpath)

### Methods

- [init](AnswerBoxSerpElementItem.md#init)
- [toJSON](AnswerBoxSerpElementItem.md#tojson)
- [fromJS](AnswerBoxSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AnswerBoxSerpElementItem**(`data?`): [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md) |

#### Returns

[`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:30446

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[IAnswerBoxSerpElementItem](../interfaces/IAnswerBoxSerpElementItem.md).[links](../interfaces/IAnswerBoxSerpElementItem.md#links)

#### Defined in

main.ts:30438

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IAnswerBoxSerpElementItem](../interfaces/IAnswerBoxSerpElementItem.md).[position](../interfaces/IAnswerBoxSerpElementItem.md#position)

#### Defined in

main.ts:30431

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IAnswerBoxSerpElementItem](../interfaces/IAnswerBoxSerpElementItem.md).[rank_absolute](../interfaces/IAnswerBoxSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:30427

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAnswerBoxSerpElementItem](../interfaces/IAnswerBoxSerpElementItem.md).[rank_group](../interfaces/IAnswerBoxSerpElementItem.md#rank_group)

#### Defined in

main.ts:30424

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IAnswerBoxSerpElementItem](../interfaces/IAnswerBoxSerpElementItem.md).[rectangle](../interfaces/IAnswerBoxSerpElementItem.md#rectangle)

#### Defined in

main.ts:30442

___

### text

• `Optional` **text**: `string`[]

text
if there is none, equals null

#### Implementation of

[IAnswerBoxSerpElementItem](../interfaces/IAnswerBoxSerpElementItem.md).[text](../interfaces/IAnswerBoxSerpElementItem.md#text)

#### Defined in

main.ts:30436

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAnswerBoxSerpElementItem](../interfaces/IAnswerBoxSerpElementItem.md).[xpath](../interfaces/IAnswerBoxSerpElementItem.md#xpath)

#### Defined in

main.ts:30433

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

main.ts:30451

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

main.ts:30483

___

### fromJS

▸ **fromJS**(`data`): [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30476
