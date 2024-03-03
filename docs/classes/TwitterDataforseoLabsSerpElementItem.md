[Documentation](../README.md) / [Exports](../modules.md) / TwitterDataforseoLabsSerpElementItem

# Class: TwitterDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`TwitterDataforseoLabsSerpElementItem`**

## Implements

- [`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TwitterDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TwitterDataforseoLabsSerpElementItem.md#_discriminator)
- [items](TwitterDataforseoLabsSerpElementItem.md#items)
- [position](TwitterDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](TwitterDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](TwitterDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](TwitterDataforseoLabsSerpElementItem.md#se_type)
- [title](TwitterDataforseoLabsSerpElementItem.md#title)
- [url](TwitterDataforseoLabsSerpElementItem.md#url)
- [xpath](TwitterDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](TwitterDataforseoLabsSerpElementItem.md#init)
- [toJSON](TwitterDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](TwitterDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TwitterDataforseoLabsSerpElementItem**(`data?`): [`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITwitterDataforseoLabsSerpElementItem`](../interfaces/ITwitterDataforseoLabsSerpElementItem.md) |

#### Returns

[`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:91386

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### items

• `Optional` **items**: [`TwitterElement`](TwitterElement.md)[]

elements of search results found in SERP

#### Implementation of

[ITwitterDataforseoLabsSerpElementItem](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[items](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:91382

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ITwitterDataforseoLabsSerpElementItem](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[position](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:91374

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ITwitterDataforseoLabsSerpElementItem](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:91370

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITwitterDataforseoLabsSerpElementItem](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:91367

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[ITwitterDataforseoLabsSerpElementItem](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[se_type](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

main.ts:91364

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[ITwitterDataforseoLabsSerpElementItem](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[title](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:91378

___

### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[ITwitterDataforseoLabsSerpElementItem](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[url](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:91380

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ITwitterDataforseoLabsSerpElementItem](../interfaces/ITwitterDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ITwitterDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:91376

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

main.ts:91391

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

main.ts:91420

___

### fromJS

▸ **fromJS**(`data`): [`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:91413
