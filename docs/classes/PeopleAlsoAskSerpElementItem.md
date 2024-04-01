[Documentation](../README.md) / [Exports](../modules.md) / PeopleAlsoAskSerpElementItem

# Class: PeopleAlsoAskSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`PeopleAlsoAskSerpElementItem`**

## Implements

- [`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeopleAlsoAskSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PeopleAlsoAskSerpElementItem.md#_discriminator)
- [items](PeopleAlsoAskSerpElementItem.md#items)
- [position](PeopleAlsoAskSerpElementItem.md#position)
- [rank\_absolute](PeopleAlsoAskSerpElementItem.md#rank_absolute)
- [rank\_group](PeopleAlsoAskSerpElementItem.md#rank_group)
- [rectangle](PeopleAlsoAskSerpElementItem.md#rectangle)
- [xpath](PeopleAlsoAskSerpElementItem.md#xpath)

### Methods

- [init](PeopleAlsoAskSerpElementItem.md#init)
- [toJSON](PeopleAlsoAskSerpElementItem.md#tojson)
- [fromJS](PeopleAlsoAskSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PeopleAlsoAskSerpElementItem**(`data?`): [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md) |

#### Returns

[`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:29349

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[items](../interfaces/IPeopleAlsoAskSerpElementItem.md#items)

#### Defined in

main.ts:29341

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[position](../interfaces/IPeopleAlsoAskSerpElementItem.md#position)

#### Defined in

main.ts:29336

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[rank_absolute](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:29332

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[rank_group](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_group)

#### Defined in

main.ts:29328

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[rectangle](../interfaces/IPeopleAlsoAskSerpElementItem.md#rectangle)

#### Defined in

main.ts:29345

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[xpath](../interfaces/IPeopleAlsoAskSerpElementItem.md#xpath)

#### Defined in

main.ts:29338

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

main.ts:29354

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

main.ts:29381

___

### fromJS

▸ **fromJS**(`data`): [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:29374
