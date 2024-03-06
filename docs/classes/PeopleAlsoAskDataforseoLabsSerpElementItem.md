[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / PeopleAlsoAskDataforseoLabsSerpElementItem

# Class: PeopleAlsoAskDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`PeopleAlsoAskDataforseoLabsSerpElementItem`**

## Implements

- [`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeopleAlsoAskDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PeopleAlsoAskDataforseoLabsSerpElementItem.md#_discriminator)
- [items](PeopleAlsoAskDataforseoLabsSerpElementItem.md#items)
- [position](PeopleAlsoAskDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](PeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](PeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](PeopleAlsoAskDataforseoLabsSerpElementItem.md#se_type)
- [xpath](PeopleAlsoAskDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](PeopleAlsoAskDataforseoLabsSerpElementItem.md#init)
- [toJSON](PeopleAlsoAskDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](PeopleAlsoAskDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PeopleAlsoAskDataforseoLabsSerpElementItem**(`data?`): [`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeopleAlsoAskDataforseoLabsSerpElementItem`](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md) |

#### Returns

[`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:91144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91144)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### items

• `Optional` **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

elements of search results found in SERP

#### Implementation of

[IPeopleAlsoAskDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[items](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:91140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91140)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPeopleAlsoAskDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[position](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:91136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91136)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPeopleAlsoAskDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:91132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91132)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPeopleAlsoAskDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:91129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91129)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IPeopleAlsoAskDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[se_type](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

[main.ts:91126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91126)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPeopleAlsoAskDataforseoLabsSerpElementItem](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IPeopleAlsoAskDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:91138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91138)

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

[main.ts:91149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91149)

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

[main.ts:91176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91176)

___


### fromJS

▸ **fromJS**(`data`): [`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:91169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91169)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")