[Documentation](../README.md) / [Exports](../modules.md) / QuestionsAndAnswersSerpElementItem

# Class: QuestionsAndAnswersSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`QuestionsAndAnswersSerpElementItem`**

## Implements

- [`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](QuestionsAndAnswersSerpElementItem.md#constructor)

### Properties

- [\_discriminator](QuestionsAndAnswersSerpElementItem.md#_discriminator)
- [items](QuestionsAndAnswersSerpElementItem.md#items)
- [position](QuestionsAndAnswersSerpElementItem.md#position)
- [rank\_absolute](QuestionsAndAnswersSerpElementItem.md#rank_absolute)
- [rank\_group](QuestionsAndAnswersSerpElementItem.md#rank_group)
- [rectangle](QuestionsAndAnswersSerpElementItem.md#rectangle)
- [xpath](QuestionsAndAnswersSerpElementItem.md#xpath)

### Methods

- [init](QuestionsAndAnswersSerpElementItem.md#init)
- [toJSON](QuestionsAndAnswersSerpElementItem.md#tojson)
- [fromJS](QuestionsAndAnswersSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new QuestionsAndAnswersSerpElementItem**(`data?`): [`QuestionsAndAnswersSerpElementItem`](QuestionsAndAnswersSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md) |

#### Returns

[`QuestionsAndAnswersSerpElementItem`](QuestionsAndAnswersSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:33047

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### items

• `Optional` **items**: [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IQuestionsAndAnswersSerpElementItem](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[items](../interfaces/IQuestionsAndAnswersSerpElementItem.md#items)

#### Defined in

main.ts:33039

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IQuestionsAndAnswersSerpElementItem](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[position](../interfaces/IQuestionsAndAnswersSerpElementItem.md#position)

#### Defined in

main.ts:33035

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IQuestionsAndAnswersSerpElementItem](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[rank_absolute](../interfaces/IQuestionsAndAnswersSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:33031

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IQuestionsAndAnswersSerpElementItem](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[rank_group](../interfaces/IQuestionsAndAnswersSerpElementItem.md#rank_group)

#### Defined in

main.ts:33028

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IQuestionsAndAnswersSerpElementItem](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[rectangle](../interfaces/IQuestionsAndAnswersSerpElementItem.md#rectangle)

#### Defined in

main.ts:33043

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IQuestionsAndAnswersSerpElementItem](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[xpath](../interfaces/IQuestionsAndAnswersSerpElementItem.md#xpath)

#### Defined in

main.ts:33037

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

main.ts:33052

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

main.ts:33079

___

### fromJS

▸ **fromJS**(`data`): [`QuestionsAndAnswersSerpElementItem`](QuestionsAndAnswersSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`QuestionsAndAnswersSerpElementItem`](QuestionsAndAnswersSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33072
