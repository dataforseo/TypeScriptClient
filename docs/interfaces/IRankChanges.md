[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IRankChanges

# Interface: IRankChanges

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### is\_down?

> `optional` **is\_down**: `boolean`

rank of this element went down
if the value is true, position of the element in SERP is lower compared to the previous check

#### Defined in

main.ts:92558

***

### is\_new?

> `optional` **is\_new**: `boolean`

element was previously present in SERP
if the value is true, previously collected SERP didn’t contain this element

#### Defined in

main.ts:92552

***

### is\_up?

> `optional` **is\_up**: `boolean`

rank of this element went up
if the value is true, position of the element in SERP is higher compared to the previous check

#### Defined in

main.ts:92555

***

### previous\_rank\_absolute?

> `optional` **previous\_rank\_absolute**: `number`

previous absolute rank in SERP
indicates previous rank of the element in Google SERP;
if this element is new, the value will be null

#### Defined in

main.ts:92549
