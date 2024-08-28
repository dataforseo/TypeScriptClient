[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AiOverviewElement

# Class: AiOverviewElement

## Implements

- [`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AiOverviewElement()

> **new AiOverviewElement**(`data`?): [`AiOverviewElement`](AiOverviewElement.md)

#### Parameters

• **data?**: [`IAiOverviewElement`](../interfaces/IAiOverviewElement.md)

#### Returns

[`AiOverviewElement`](AiOverviewElement.md)

#### Defined in

main.ts:38280

## Properties

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element
if there are none, equals null

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`images`](../interfaces/IAiOverviewElement.md#images)

#### Defined in

main.ts:38273

***

### references?

> `optional` **references**: [`AiOverviewReference`](AiOverviewReference.md)[]

references relevant to the element
includes references to webpages that were used to generate the ai_overview_element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`references`](../interfaces/IAiOverviewElement.md#references)

#### Defined in

main.ts:38276

***

### text?

> `optional` **text**: `string`

reference text
text snippet from the page that was used to generate the ai_overview_element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`text`](../interfaces/IAiOverviewElement.md#text)

#### Defined in

main.ts:38270

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`title`](../interfaces/IAiOverviewElement.md#title)

#### Defined in

main.ts:38267

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAiOverviewElement`](../interfaces/IAiOverviewElement.md).[`type`](../interfaces/IAiOverviewElement.md#type)

#### Defined in

main.ts:38265

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:38289

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:38318

***

### fromJS()

> `static` **fromJS**(`data`): [`AiOverviewElement`](AiOverviewElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AiOverviewElement`](AiOverviewElement.md)

#### Defined in

main.ts:38311
