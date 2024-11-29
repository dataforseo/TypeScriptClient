[**Documentation**](../README.md)

***

[Documentation](../README.md) / FaqBoxElement

# Class: FaqBoxElement

## Implements

- [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FaqBoxElement()

> **new FaqBoxElement**(`data`?): [`FaqBoxElement`](FaqBoxElement.md)

#### Parameters

##### data?

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

#### Defined in

main.ts:31231

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`description`](../interfaces/IFaqBoxElement.md#description)

#### Defined in

main.ts:31225

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`links`](../interfaces/IFaqBoxElement.md#links)

#### Defined in

main.ts:31227

***

### title?

> `optional` **title**: `string`

reference page title

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`title`](../interfaces/IFaqBoxElement.md#title)

#### Defined in

main.ts:31223

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`type`](../interfaces/IFaqBoxElement.md#type)

#### Defined in

main.ts:31221

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:31240

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:31264

***

### fromJS()

> `static` **fromJS**(`data`): [`FaqBoxElement`](FaqBoxElement.md)

#### Parameters

##### data

`any`

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

#### Defined in

main.ts:31257
