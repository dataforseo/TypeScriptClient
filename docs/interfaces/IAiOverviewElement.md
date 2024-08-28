[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAiOverviewElement

# Interface: IAiOverviewElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element
if there are none, equals null

#### Defined in

main.ts:38351

***

### references?

> `optional` **references**: [`AiOverviewReference`](../classes/AiOverviewReference.md)[]

references relevant to the element
includes references to webpages that were used to generate the ai_overview_element

#### Defined in

main.ts:38354

***

### text?

> `optional` **text**: `string`

reference text
text snippet from the page that was used to generate the ai_overview_element

#### Defined in

main.ts:38348

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:38345

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:38343
