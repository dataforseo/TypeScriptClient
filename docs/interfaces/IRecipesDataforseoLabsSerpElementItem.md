[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IRecipesDataforseoLabsSerpElementItem

# Interface: IRecipesDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`RecipesElement`](../classes/RecipesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:101267

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:101262

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:101258

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:101255

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:101264
