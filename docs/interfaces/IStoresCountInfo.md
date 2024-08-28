[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IStoresCountInfo

# Interface: IStoresCountInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `string`

number of stores that offer the product

#### Defined in

main.ts:178489

***

### count\_from\_text?

> `optional` **count\_from\_text**: `boolean`

whether the number of stores is taken from text
indicates whether the number of stores is taken from displayed_text;
if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is false;
if the API cannot find the number of stores in the HTML code of the page, it takes the number from the displayed_text;
in this case, the parameter is true

#### Defined in

main.ts:178497

***

### displayed\_text?

> `optional` **displayed\_text**: `string`

text displayed on the Google Shopping page

#### Defined in

main.ts:178491
