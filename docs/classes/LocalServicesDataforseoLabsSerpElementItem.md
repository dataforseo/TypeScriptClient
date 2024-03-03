[Documentation](../README.md) / [Exports](../modules.md) / LocalServicesDataforseoLabsSerpElementItem

# Class: LocalServicesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`LocalServicesDataforseoLabsSerpElementItem`**

## Implements

- [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalServicesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](LocalServicesDataforseoLabsSerpElementItem.md#_discriminator)
- [domain](LocalServicesDataforseoLabsSerpElementItem.md#domain)
- [items](LocalServicesDataforseoLabsSerpElementItem.md#items)
- [position](LocalServicesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](LocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](LocalServicesDataforseoLabsSerpElementItem.md#rank_group)
- [title](LocalServicesDataforseoLabsSerpElementItem.md#title)
- [url](LocalServicesDataforseoLabsSerpElementItem.md#url)
- [xpath](LocalServicesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](LocalServicesDataforseoLabsSerpElementItem.md#init)
- [toJSON](LocalServicesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](LocalServicesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new LocalServicesDataforseoLabsSerpElementItem**(`data?`): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md) |

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:96165

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[domain](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#domain)

#### Defined in

main.ts:96159

___

### items

• `Optional` **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

elements of search results found in SERP

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[items](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:96161

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[position](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:96151

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:96147

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:96144

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[title](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:96155

___

### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[url](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:96157

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:96153

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

main.ts:96170

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

main.ts:96199

___

### fromJS

▸ **fromJS**(`data`): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:96192
