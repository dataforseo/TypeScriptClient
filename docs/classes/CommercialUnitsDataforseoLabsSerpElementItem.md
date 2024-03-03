[Documentation](../README.md) / [Exports](../modules.md) / CommercialUnitsDataforseoLabsSerpElementItem

# Class: CommercialUnitsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`CommercialUnitsDataforseoLabsSerpElementItem`**

## Implements

- [`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CommercialUnitsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](CommercialUnitsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](CommercialUnitsDataforseoLabsSerpElementItem.md#items)
- [position](CommercialUnitsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](CommercialUnitsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](CommercialUnitsDataforseoLabsSerpElementItem.md#rank_group)
- [title](CommercialUnitsDataforseoLabsSerpElementItem.md#title)
- [xpath](CommercialUnitsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](CommercialUnitsDataforseoLabsSerpElementItem.md#init)
- [toJSON](CommercialUnitsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](CommercialUnitsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new CommercialUnitsDataforseoLabsSerpElementItem**(`data?`): [`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICommercialUnitsDataforseoLabsSerpElementItem`](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md) |

#### Returns

[`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:96067

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### items

• `Optional` **items**: [`CommercialUnitsElement`](CommercialUnitsElement.md)[]

elements of search results found in SERP

#### Implementation of

[ICommercialUnitsDataforseoLabsSerpElementItem](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[items](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:96063

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ICommercialUnitsDataforseoLabsSerpElementItem](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[position](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:96057

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ICommercialUnitsDataforseoLabsSerpElementItem](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:96053

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ICommercialUnitsDataforseoLabsSerpElementItem](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:96050

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[ICommercialUnitsDataforseoLabsSerpElementItem](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[title](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:96061

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ICommercialUnitsDataforseoLabsSerpElementItem](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ICommercialUnitsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:96059

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

main.ts:96072

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

main.ts:96099

___

### fromJS

▸ **fromJS**(`data`): [`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:96092
