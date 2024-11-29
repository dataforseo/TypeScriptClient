[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseGoogleImagesSerpElementItem

# Interface: IBaseGoogleImagesSerpElementItem

## Extended by

- [`IGoogleImageCarouselSerpElementItem`](IGoogleImageCarouselSerpElementItem.md)
- [`IGoogleImageImagesSearchSerpElementItem`](IGoogleImageImagesSearchSerpElementItem.md)
- [`IGoogleImageRelatedSearchesSerpElementItem`](IGoogleImageRelatedSearchesSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

main.ts:50805

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:50802

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:50798

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:50807
