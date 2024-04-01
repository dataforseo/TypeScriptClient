[Documentation](../README.md) / [Exports](../modules.md) / GoogleHotelsDataforseoLabsSerpElementItem

# Class: GoogleHotelsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`GoogleHotelsDataforseoLabsSerpElementItem`**

## Implements

- [`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleHotelsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleHotelsDataforseoLabsSerpElementItem.md#_discriminator)
- [hotel\_identifier](GoogleHotelsDataforseoLabsSerpElementItem.md#hotel_identifier)
- [position](GoogleHotelsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](GoogleHotelsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleHotelsDataforseoLabsSerpElementItem.md#rank_group)
- [url](GoogleHotelsDataforseoLabsSerpElementItem.md#url)
- [xpath](GoogleHotelsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](GoogleHotelsDataforseoLabsSerpElementItem.md#init)
- [toJSON](GoogleHotelsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](GoogleHotelsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleHotelsDataforseoLabsSerpElementItem**(`data?`): [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md) |

#### Returns

[`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:98502

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[hotel_identifier](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#hotel_identifier)

#### Defined in

main.ts:98496

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[position](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:98490

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:98486

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:98483

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[url](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:98498

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:98492

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

main.ts:98507

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

main.ts:98530

___

### fromJS

▸ **fromJS**(`data`): [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98523
