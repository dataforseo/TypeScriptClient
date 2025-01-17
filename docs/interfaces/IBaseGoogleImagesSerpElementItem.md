[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseGoogleImagesSerpElementItem

# Interface: IBaseGoogleImagesSerpElementItem

Defined in: main.ts:50796

## Extended by

- [`IGoogleImageCarouselSerpElementItem`](IGoogleImageCarouselSerpElementItem.md)
- [`IGoogleImageImagesSearchSerpElementItem`](IGoogleImageImagesSearchSerpElementItem.md)
- [`IGoogleImageRelatedSearchesSerpElementItem`](IGoogleImageRelatedSearchesSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:50805

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:50802

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:50798

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:50807

the XPath of the element
