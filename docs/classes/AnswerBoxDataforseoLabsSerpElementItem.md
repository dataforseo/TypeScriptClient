[Documentation](../README.md) / [Exports](../modules.md) / AnswerBoxDataforseoLabsSerpElementItem

# Class: AnswerBoxDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`AnswerBoxDataforseoLabsSerpElementItem`**

## Implements

- [`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AnswerBoxDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AnswerBoxDataforseoLabsSerpElementItem.md#_discriminator)
- [links](AnswerBoxDataforseoLabsSerpElementItem.md#links)
- [position](AnswerBoxDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](AnswerBoxDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](AnswerBoxDataforseoLabsSerpElementItem.md#rank_group)
- [text](AnswerBoxDataforseoLabsSerpElementItem.md#text)
- [xpath](AnswerBoxDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](AnswerBoxDataforseoLabsSerpElementItem.md#init)
- [toJSON](AnswerBoxDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](AnswerBoxDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AnswerBoxDataforseoLabsSerpElementItem**(`data?`): [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md) |

#### Returns

[`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:95082

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[links](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:95078

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[position](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:95069

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:95065

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:95062

___

### text

• `Optional` **text**: `string`[]

text
if there is none, equals null

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[text](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#text)

#### Defined in

main.ts:95074

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAnswerBoxDataforseoLabsSerpElementItem](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:95071

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

main.ts:95087

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

main.ts:95118

___

### fromJS

▸ **fromJS**(`data`): [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:95111
