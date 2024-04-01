[Documentation](../README.md) / [Exports](../modules.md) / AppSerpElementItem

# Class: AppSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`AppSerpElementItem`**

## Implements

- [`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AppSerpElementItem.md#_discriminator)
- [items](AppSerpElementItem.md#items)
- [position](AppSerpElementItem.md#position)
- [rank\_absolute](AppSerpElementItem.md#rank_absolute)
- [rank\_group](AppSerpElementItem.md#rank_group)
- [rectangle](AppSerpElementItem.md#rectangle)
- [xpath](AppSerpElementItem.md#xpath)

### Methods

- [init](AppSerpElementItem.md#init)
- [toJSON](AppSerpElementItem.md#tojson)
- [fromJS](AppSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AppSerpElementItem**(`data?`): [`AppSerpElementItem`](AppSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md) |

#### Returns

[`AppSerpElementItem`](AppSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:30495

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`AppElement`](AppElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IAppSerpElementItem](../interfaces/IAppSerpElementItem.md).[items](../interfaces/IAppSerpElementItem.md#items)

#### Defined in

main.ts:30487

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IAppSerpElementItem](../interfaces/IAppSerpElementItem.md).[position](../interfaces/IAppSerpElementItem.md#position)

#### Defined in

main.ts:30482

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IAppSerpElementItem](../interfaces/IAppSerpElementItem.md).[rank_absolute](../interfaces/IAppSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:30478

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IAppSerpElementItem](../interfaces/IAppSerpElementItem.md).[rank_group](../interfaces/IAppSerpElementItem.md#rank_group)

#### Defined in

main.ts:30474

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IAppSerpElementItem](../interfaces/IAppSerpElementItem.md).[rectangle](../interfaces/IAppSerpElementItem.md#rectangle)

#### Defined in

main.ts:30491

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAppSerpElementItem](../interfaces/IAppSerpElementItem.md).[xpath](../interfaces/IAppSerpElementItem.md#xpath)

#### Defined in

main.ts:30484

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

main.ts:30500

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

main.ts:30527

___

### fromJS

▸ **fromJS**(`data`): [`AppSerpElementItem`](AppSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppSerpElementItem`](AppSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30520
