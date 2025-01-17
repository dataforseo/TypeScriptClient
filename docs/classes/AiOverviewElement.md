[**Documentation**](../README.md)

***

[Documentation](../README.md) / AiOverviewElement

# Class: AiOverviewElement

Defined in: main.ts:30835

## Implements

- [`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AiOverviewElement()

> **new AiOverviewElement**(`data`?): [`AiOverviewElement`](AiOverviewElement.md)

Defined in: main.ts:30849

#### Parameters

##### data?

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

#### Returns

[`AiOverviewElement`](AiOverviewElement.md)

## Properties

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:30843

images of the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`images`](../interfaces/IAiOverviewElement.md#images)

***

### references?

> `optional` **references**: [`AiOverviewReference`](AiOverviewReference.md)[]

Defined in: main.ts:30845

references relevant to the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`references`](../interfaces/IAiOverviewElement.md#references)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:30841

description content

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`text`](../interfaces/IAiOverviewElement.md#text)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30839

title of the element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`title`](../interfaces/IAiOverviewElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:30837

type of element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`type`](../interfaces/IAiOverviewElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30858

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:30887

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AiOverviewElement`](AiOverviewElement.md)

Defined in: main.ts:30880

#### Parameters

##### data

`any`

#### Returns

[`AiOverviewElement`](AiOverviewElement.md)
