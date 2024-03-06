[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / PeopleAlsoSearchDataforseoLabsSerpElementItem

# Class: PeopleAlsoSearchDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`PeopleAlsoSearchDataforseoLabsSerpElementItem`**

## Implements

- [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#_discriminator)
- [items](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#items)
- [position](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#se_type)
- [title](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#title)
- [xpath](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#init)
- [toJSON](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](PeopleAlsoSearchDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PeopleAlsoSearchDataforseoLabsSerpElementItem**(`data?`): [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md) |

#### Returns

[`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:91346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91346)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### items

• `Optional` **items**: `string`[]

elements of search results found in SERP

#### Implementation of

[IPeopleAlsoSearchDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[items](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:91342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91342)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPeopleAlsoSearchDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[position](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:91336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91336)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPeopleAlsoSearchDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:91332](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91332)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPeopleAlsoSearchDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:91329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91329)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IPeopleAlsoSearchDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[se_type](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

[main.ts:91326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91326)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IPeopleAlsoSearchDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[title](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:91340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91340)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPeopleAlsoSearchDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IPeopleAlsoSearchDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:91338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91338)

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

[main.ts:91351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91351)

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

[main.ts:91379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91379)

___


### fromJS

▸ **fromJS**(`data`): [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:91372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91372)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")