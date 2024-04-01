[Documentation](../README.md) / [Exports](../modules.md) / JobsDataforseoLabsSerpElementItem

# Class: JobsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`JobsDataforseoLabsSerpElementItem`**

## Implements

- [`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](JobsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](JobsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](JobsDataforseoLabsSerpElementItem.md#items)
- [position](JobsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](JobsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](JobsDataforseoLabsSerpElementItem.md#rank_group)
- [title](JobsDataforseoLabsSerpElementItem.md#title)
- [url](JobsDataforseoLabsSerpElementItem.md#url)
- [xpath](JobsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](JobsDataforseoLabsSerpElementItem.md#init)
- [toJSON](JobsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](JobsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new JobsDataforseoLabsSerpElementItem**(`data?`): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md) |

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:97160

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`JobsElement`](JobsElement.md)[]

elements of search results found in SERP

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[items](../interfaces/IJobsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:97156

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[position](../interfaces/IJobsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:97148

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:97144

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:97141

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[title](../interfaces/IJobsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:97152

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[url](../interfaces/IJobsDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:97154

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IJobsDataforseoLabsSerpElementItem](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IJobsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:97150

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

main.ts:97165

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

main.ts:97193

___

### fromJS

▸ **fromJS**(`data`): [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:97186
