[Documentation](../README.md) / [Exports](../modules.md) / QuestionsAndAnswersDataforseoLabsSerpElementItem

# Class: QuestionsAndAnswersDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`QuestionsAndAnswersDataforseoLabsSerpElementItem`**

## Implements

- [`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#_discriminator)
- [items](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#items)
- [position](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#init)
- [toJSON](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](QuestionsAndAnswersDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new QuestionsAndAnswersDataforseoLabsSerpElementItem**(`data?`): [`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md) |

#### Returns

[`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:97908

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)[]

elements of search results found in SERP

#### Implementation of

[IQuestionsAndAnswersDataforseoLabsSerpElementItem](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[items](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97904

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IQuestionsAndAnswersDataforseoLabsSerpElementItem](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[position](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97900

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IQuestionsAndAnswersDataforseoLabsSerpElementItem](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97896

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IQuestionsAndAnswersDataforseoLabsSerpElementItem](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97893

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IQuestionsAndAnswersDataforseoLabsSerpElementItem](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97902

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:97913

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:97939

___

### fromJS

▸ **fromJS**(`data`): [`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97932
