[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / GooglePostsSerpElementItem

# Class: GooglePostsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`GooglePostsSerpElementItem`**

## Implements

- [`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GooglePostsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GooglePostsSerpElementItem.md#_discriminator)
- [cid](GooglePostsSerpElementItem.md#cid)
- [feature](GooglePostsSerpElementItem.md#feature)
- [position](GooglePostsSerpElementItem.md#position)
- [posts\_id](GooglePostsSerpElementItem.md#posts_id)
- [rank\_absolute](GooglePostsSerpElementItem.md#rank_absolute)
- [rank\_group](GooglePostsSerpElementItem.md#rank_group)
- [rectangle](GooglePostsSerpElementItem.md#rectangle)
- [xpath](GooglePostsSerpElementItem.md#xpath)

### Methods

- [init](GooglePostsSerpElementItem.md#init)
- [toJSON](GooglePostsSerpElementItem.md#tojson)
- [fromJS](GooglePostsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GooglePostsSerpElementItem**(`data?`): [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md) |

#### Returns

[`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:34333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34333)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### cid

• `Optional` **cid**: `string`

google-defined client id

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[cid](../interfaces/IGooglePostsSerpElementItem.md#cid)

#### Defined in

[main.ts:34325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34325)

___


### feature

• `Optional` **feature**: `string`

the additional feature of the review

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[feature](../interfaces/IGooglePostsSerpElementItem.md#feature)

#### Defined in

[main.ts:34323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34323)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[position](../interfaces/IGooglePostsSerpElementItem.md#position)

#### Defined in

[main.ts:34317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34317)

___


### posts\_id

• `Optional` **posts\_id**: `string`

the identifier of the google_posts feature

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[posts_id](../interfaces/IGooglePostsSerpElementItem.md#posts_id)

#### Defined in

[main.ts:34321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34321)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[rank_absolute](../interfaces/IGooglePostsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:34313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34313)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[rank_group](../interfaces/IGooglePostsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:34310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34310)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[rectangle](../interfaces/IGooglePostsSerpElementItem.md#rectangle)

#### Defined in

[main.ts:34329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34329)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGooglePostsSerpElementItem](../interfaces/IGooglePostsSerpElementItem.md).[xpath](../interfaces/IGooglePostsSerpElementItem.md#xpath)

#### Defined in

[main.ts:34319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34319)

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

[main.ts:34338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34338)

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

[main.ts:34363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34363)

___


### fromJS

▸ **fromJS**(`data`): [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:34356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34356)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")