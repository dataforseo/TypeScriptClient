[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / EventsDataforseoLabsSerpElementItem

# Class: EventsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`EventsDataforseoLabsSerpElementItem`**

## Implements

- [`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](EventsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](EventsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](EventsDataforseoLabsSerpElementItem.md#items)
- [position](EventsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](EventsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](EventsDataforseoLabsSerpElementItem.md#rank_group)
- [title](EventsDataforseoLabsSerpElementItem.md#title)
- [url](EventsDataforseoLabsSerpElementItem.md#url)
- [xpath](EventsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](EventsDataforseoLabsSerpElementItem.md#init)
- [toJSON](EventsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](EventsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new EventsDataforseoLabsSerpElementItem**(`data?`): [`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IEventsDataforseoLabsSerpElementItem`](../interfaces/IEventsDataforseoLabsSerpElementItem.md) |

#### Returns

[`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:94883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94883)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### items

• `Optional` **items**: [`EventsElement`](EventsElement.md)[]

elements of search results found in SERP

#### Implementation of

[IEventsDataforseoLabsSerpElementItem](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[items](../interfaces/IEventsDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:94879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94879)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IEventsDataforseoLabsSerpElementItem](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[position](../interfaces/IEventsDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:94871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94871)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IEventsDataforseoLabsSerpElementItem](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IEventsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:94867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94867)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IEventsDataforseoLabsSerpElementItem](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IEventsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:94864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94864)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IEventsDataforseoLabsSerpElementItem](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[title](../interfaces/IEventsDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:94875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94875)

___


### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IEventsDataforseoLabsSerpElementItem](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[url](../interfaces/IEventsDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:94877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94877)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IEventsDataforseoLabsSerpElementItem](../interfaces/IEventsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IEventsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:94873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94873)

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

[main.ts:94888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94888)

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

[main.ts:94916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94916)

___


### fromJS

▸ **fromJS**(`data`): [`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:94909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94909)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")