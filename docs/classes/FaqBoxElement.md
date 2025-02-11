[**Documentation**](../README.md)

***

[Documentation](../README.md) / FaqBoxElement

# Class: FaqBoxElement

Defined in: main.ts:31225

## Implements

- [`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FaqBoxElement()

> **new FaqBoxElement**(`data`?): [`FaqBoxElement`](FaqBoxElement.md)

Defined in: main.ts:31237

#### Parameters

##### data?

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md)

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:31231

description

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`description`](../interfaces/IFaqBoxElement.md#description)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:31233

link of the element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`links`](../interfaces/IFaqBoxElement.md#links)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31229

reference page title

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`title`](../interfaces/IFaqBoxElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31227

type of element

#### Implementation of

[`IFaqBoxElement`](../interfaces/IFaqBoxElement.md).[`type`](../interfaces/IFaqBoxElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31246

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:31270

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`FaqBoxElement`](FaqBoxElement.md)

Defined in: main.ts:31263

#### Parameters

##### data

`any`

#### Returns

[`FaqBoxElement`](FaqBoxElement.md)
