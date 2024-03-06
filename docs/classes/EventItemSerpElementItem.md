[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / EventItemSerpElementItem

# Class: EventItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`EventItemSerpElementItem`**

## Implements

- [`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](EventItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](EventItemSerpElementItem.md#_discriminator)
- [description](EventItemSerpElementItem.md#description)
- [event\_dates](EventItemSerpElementItem.md#event_dates)
- [image\_url](EventItemSerpElementItem.md#image_url)
- [information\_and\_tickets](EventItemSerpElementItem.md#information_and_tickets)
- [location\_info](EventItemSerpElementItem.md#location_info)
- [position](EventItemSerpElementItem.md#position)
- [rank\_absolute](EventItemSerpElementItem.md#rank_absolute)
- [rank\_group](EventItemSerpElementItem.md#rank_group)
- [title](EventItemSerpElementItem.md#title)
- [url](EventItemSerpElementItem.md#url)
- [xpath](EventItemSerpElementItem.md#xpath)

### Methods

- [init](EventItemSerpElementItem.md#init)
- [toJSON](EventItemSerpElementItem.md#tojson)
- [fromJS](EventItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new EventItemSerpElementItem**(`data?`): [`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IEventItemSerpElementItem`](../interfaces/IEventItemSerpElementItem.md) |

#### Returns

[`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:44700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44700)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[description](../interfaces/IEventItemSerpElementItem.md#description)

#### Defined in

[main.ts:44683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44683)

___


### event\_dates

• `Optional` **event\_dates**: [`EventDates`](EventDates.md)

dates when the event takes place
if there are none, equals null

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[event_dates](../interfaces/IEventItemSerpElementItem.md#event_dates)

#### Defined in

[main.ts:44690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44690)

___


### image\_url

• `Optional` **image\_url**: `string`

URL of the image featured in the element

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[image_url](../interfaces/IEventItemSerpElementItem.md#image_url)

#### Defined in

[main.ts:44687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44687)

___


### information\_and\_tickets

• `Optional` **information\_and\_tickets**: [`InformationAndTicketsElement`](InformationAndTicketsElement.md)[]

additional information and ticket purchase options
if there is none, equals null

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[information_and_tickets](../interfaces/IEventItemSerpElementItem.md#information_and_tickets)

#### Defined in

[main.ts:44696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44696)

___


### location\_info

• `Optional` **location\_info**: [`LocationInfo`](LocationInfo.md)

information about the event’s venue
if there is none, equals null

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[location_info](../interfaces/IEventItemSerpElementItem.md#location_info)

#### Defined in

[main.ts:44693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44693)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[position](../interfaces/IEventItemSerpElementItem.md#position)

#### Defined in

[main.ts:44677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44677)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[rank_absolute](../interfaces/IEventItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:44673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44673)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[rank_group](../interfaces/IEventItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:44670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44670)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[title](../interfaces/IEventItemSerpElementItem.md#title)

#### Defined in

[main.ts:44681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44681)

___


### url

• `Optional` **url**: `string`

relevant URL

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[url](../interfaces/IEventItemSerpElementItem.md#url)

#### Defined in

[main.ts:44685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44685)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IEventItemSerpElementItem](../interfaces/IEventItemSerpElementItem.md).[xpath](../interfaces/IEventItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:44679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44679)

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

[main.ts:44705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44705)

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

[main.ts:44737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44737)

___


### fromJS

▸ **fromJS**(`data`): [`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`EventItemSerpElementItem`](EventItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:44730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44730)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")