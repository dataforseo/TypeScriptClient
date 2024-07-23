**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IRankChanges

# Interface: IRankChanges

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### is\_down?

> **`optional`** **is\_down**: `boolean`

rank of this element went down
if the value is true, position of the element in SERP is lower compared to the previous check

#### Source

main.ts:92000

***

### is\_new?

> **`optional`** **is\_new**: `boolean`

element was previously present in SERP
if the value is true, previously collected SERP didn’t contain this element

#### Source

main.ts:91994

***

### is\_up?

> **`optional`** **is\_up**: `boolean`

rank of this element went up
if the value is true, position of the element in SERP is higher compared to the previous check

#### Source

main.ts:91997

***

### previous\_rank\_absolute?

> **`optional`** **previous\_rank\_absolute**: `number`

previous absolute rank in SERP
indicates previous rank of the element in Google SERP;
if this element is new, the value will be null

#### Source

main.ts:91991
