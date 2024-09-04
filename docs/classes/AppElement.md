[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppElement

# Class: AppElement

## Implements

- [`IAppElement`](../interfaces/IAppElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppElement()

> **new AppElement**(`data`?): [`AppElement`](AppElement.md)

#### Parameters

• **data?**: [`IAppElement`](../interfaces/IAppElement.md)

#### Returns

[`AppElement`](AppElement.md)

#### Defined in

main.ts:31375

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`description`](../interfaces/IAppElement.md#description)

#### Defined in

main.ts:31367

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`price`](../interfaces/IAppElement.md#price)

#### Defined in

main.ts:31371

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`title`](../interfaces/IAppElement.md#title)

#### Defined in

main.ts:31365

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`type`](../interfaces/IAppElement.md#type)

#### Defined in

main.ts:31363

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IAppElement`](../interfaces/IAppElement.md).[`url`](../interfaces/IAppElement.md#url)

#### Defined in

main.ts:31369

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:31384

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:31405

***

### fromJS()

> `static` **fromJS**(`data`): [`AppElement`](AppElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppElement`](AppElement.md)

#### Defined in

main.ts:31398
