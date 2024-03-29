[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / PeopleAlsoSearchSerpElementItem

# Class: PeopleAlsoSearchSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`PeopleAlsoSearchSerpElementItem`**

## Implements

- [`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeopleAlsoSearchSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PeopleAlsoSearchSerpElementItem.md#_discriminator)
- [items](PeopleAlsoSearchSerpElementItem.md#items)
- [position](PeopleAlsoSearchSerpElementItem.md#position)
- [rank\_absolute](PeopleAlsoSearchSerpElementItem.md#rank_absolute)
- [rank\_group](PeopleAlsoSearchSerpElementItem.md#rank_group)
- [rectangle](PeopleAlsoSearchSerpElementItem.md#rectangle)
- [title](PeopleAlsoSearchSerpElementItem.md#title)
- [xpath](PeopleAlsoSearchSerpElementItem.md#xpath)

### Methods

- [init](PeopleAlsoSearchSerpElementItem.md#init)
- [toJSON](PeopleAlsoSearchSerpElementItem.md#tojson)
- [fromJS](PeopleAlsoSearchSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PeopleAlsoSearchSerpElementItem**(`data?`): [`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md) |

#### Returns

[`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:28697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28697)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: `string`[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IPeopleAlsoSearchSerpElementItem](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[items](../interfaces/IPeopleAlsoSearchSerpElementItem.md#items)

#### Defined in

[main.ts:28689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28689)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPeopleAlsoSearchSerpElementItem](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[position](../interfaces/IPeopleAlsoSearchSerpElementItem.md#position)

#### Defined in

[main.ts:28683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28683)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPeopleAlsoSearchSerpElementItem](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[rank_absolute](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:28679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28679)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPeopleAlsoSearchSerpElementItem](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[rank_group](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rank_group)

#### Defined in

[main.ts:28676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28676)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IPeopleAlsoSearchSerpElementItem](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[rectangle](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rectangle)

#### Defined in

[main.ts:28693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28693)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IPeopleAlsoSearchSerpElementItem](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[title](../interfaces/IPeopleAlsoSearchSerpElementItem.md#title)

#### Defined in

[main.ts:28687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28687)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPeopleAlsoSearchSerpElementItem](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[xpath](../interfaces/IPeopleAlsoSearchSerpElementItem.md#xpath)

#### Defined in

[main.ts:28685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28685)

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

[main.ts:28702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28702)

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

[main.ts:28730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28730)

___


### fromJS

▸ **fromJS**(`data`): [`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:28723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28723)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")