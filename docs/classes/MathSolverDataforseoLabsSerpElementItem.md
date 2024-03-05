[dataforseo-client](../README.md) / [Exports](../modules.md) / MathSolverDataforseoLabsSerpElementItem

# Class: MathSolverDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`MathSolverDataforseoLabsSerpElementItem`**

## Implements

- [`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MathSolverDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MathSolverDataforseoLabsSerpElementItem.md#_discriminator)
- [items](MathSolverDataforseoLabsSerpElementItem.md#items)
- [links](MathSolverDataforseoLabsSerpElementItem.md#links)
- [position](MathSolverDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](MathSolverDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](MathSolverDataforseoLabsSerpElementItem.md#rank_group)
- [result](MathSolverDataforseoLabsSerpElementItem.md#result)
- [title](MathSolverDataforseoLabsSerpElementItem.md#title)
- [xpath](MathSolverDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](MathSolverDataforseoLabsSerpElementItem.md#init)
- [toJSON](MathSolverDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](MathSolverDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MathSolverDataforseoLabsSerpElementItem**(`data?`): [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md) |

#### Returns

[`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:92820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92820)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### items

• `Optional` **items**: [`MathSolverElement`](MathSolverElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IMathSolverDataforseoLabsSerpElementItem](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[items](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:92812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92812)

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IMathSolverDataforseoLabsSerpElementItem](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[links](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#links)

#### Defined in

[main.ts:92816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92816)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMathSolverDataforseoLabsSerpElementItem](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[position](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:92802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92802)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMathSolverDataforseoLabsSerpElementItem](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:92798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92798)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMathSolverDataforseoLabsSerpElementItem](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:92795](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92795)

___

### result

• `Optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Implementation of

[IMathSolverDataforseoLabsSerpElementItem](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[result](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#result)

#### Defined in

[main.ts:92809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92809)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IMathSolverDataforseoLabsSerpElementItem](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[title](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:92806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92806)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMathSolverDataforseoLabsSerpElementItem](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:92804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92804)

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

[main.ts:92825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92825)

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

[main.ts:92858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92858)

___

### fromJS

▸ **fromJS**(`data`): [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:92851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92851)
