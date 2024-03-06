[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / FindResultsOnSerpElementItem

# Class: FindResultsOnSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`FindResultsOnSerpElementItem`**

## Implements

- [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FindResultsOnSerpElementItem.md#constructor)

### Properties

- [\_discriminator](FindResultsOnSerpElementItem.md#_discriminator)
- [items](FindResultsOnSerpElementItem.md#items)
- [position](FindResultsOnSerpElementItem.md#position)
- [rank\_absolute](FindResultsOnSerpElementItem.md#rank_absolute)
- [rank\_group](FindResultsOnSerpElementItem.md#rank_group)
- [rectangle](FindResultsOnSerpElementItem.md#rectangle)
- [xpath](FindResultsOnSerpElementItem.md#xpath)

### Methods

- [init](FindResultsOnSerpElementItem.md#init)
- [toJSON](FindResultsOnSerpElementItem.md#tojson)
- [fromJS](FindResultsOnSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new FindResultsOnSerpElementItem**(`data?`): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md) |

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:32717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32717)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[items](../interfaces/IFindResultsOnSerpElementItem.md#items)

#### Defined in

[main.ts:32709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32709)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[position](../interfaces/IFindResultsOnSerpElementItem.md#position)

#### Defined in

[main.ts:32705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32705)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[rank_absolute](../interfaces/IFindResultsOnSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:32701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32701)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[rank_group](../interfaces/IFindResultsOnSerpElementItem.md#rank_group)

#### Defined in

[main.ts:32698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32698)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[rectangle](../interfaces/IFindResultsOnSerpElementItem.md#rectangle)

#### Defined in

[main.ts:32713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32713)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[xpath](../interfaces/IFindResultsOnSerpElementItem.md#xpath)

#### Defined in

[main.ts:32707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32707)

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

[main.ts:32722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32722)

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

[main.ts:32749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32749)

___


### fromJS

▸ **fromJS**(`data`): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:32742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32742)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")