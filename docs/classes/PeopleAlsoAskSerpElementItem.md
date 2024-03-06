[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / PeopleAlsoAskSerpElementItem

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

[main.ts:28595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28595)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[items](../interfaces/IPeopleAlsoAskSerpElementItem.md#items)

#### Defined in

[main.ts:28587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28587)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[position](../interfaces/IPeopleAlsoAskSerpElementItem.md#position)

#### Defined in

[main.ts:28583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28583)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[rank_absolute](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:28579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28579)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[rank_group](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_group)

#### Defined in

[main.ts:28576](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28576)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[rectangle](../interfaces/IPeopleAlsoAskSerpElementItem.md#rectangle)

#### Defined in

[main.ts:28591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28591)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPeopleAlsoAskSerpElementItem](../interfaces/IPeopleAlsoAskSerpElementItem.md).[xpath](../interfaces/IPeopleAlsoAskSerpElementItem.md#xpath)

#### Defined in

[main.ts:28585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28585)

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

[main.ts:28600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28600)

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

[main.ts:28627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28627)

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

[main.ts:28620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28620)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")