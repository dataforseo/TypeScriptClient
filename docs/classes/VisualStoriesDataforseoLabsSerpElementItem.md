[Documentation](../README.md) / [Exports](../modules.md) / VisualStoriesDataforseoLabsSerpElementItem

# Class: VisualStoriesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`VisualStoriesDataforseoLabsSerpElementItem`**

## Implements

- [`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](VisualStoriesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](VisualStoriesDataforseoLabsSerpElementItem.md#_discriminator)
- [items](VisualStoriesDataforseoLabsSerpElementItem.md#items)
- [position](VisualStoriesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](VisualStoriesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](VisualStoriesDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](VisualStoriesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](VisualStoriesDataforseoLabsSerpElementItem.md#init)
- [toJSON](VisualStoriesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](VisualStoriesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new VisualStoriesDataforseoLabsSerpElementItem**(`data?`): [`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IVisualStoriesDataforseoLabsSerpElementItem`](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md) |

#### Returns

[`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:98210

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`LicensesElement`](LicensesElement.md)[]

elements of search results found in SERP

#### Implementation of

[IVisualStoriesDataforseoLabsSerpElementItem](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[items](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:98206

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IVisualStoriesDataforseoLabsSerpElementItem](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[position](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:98202

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IVisualStoriesDataforseoLabsSerpElementItem](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:98198

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IVisualStoriesDataforseoLabsSerpElementItem](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:98195

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IVisualStoriesDataforseoLabsSerpElementItem](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IVisualStoriesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:98204

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

main.ts:98215

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

main.ts:98241

___

### fromJS

▸ **fromJS**(`data`): [`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98234
