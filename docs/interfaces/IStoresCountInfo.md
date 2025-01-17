[**Documentation**](../README.md)

***

[Documentation](../README.md) / IStoresCountInfo

# Interface: IStoresCountInfo

Defined in: main.ts:186247

## Indexable

\[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `string`

Defined in: main.ts:186249

number of stores that offer the product

***

### count\_from\_text?

> `optional` **count\_from\_text**: `boolean`

Defined in: main.ts:186257

whether the number of stores is taken from text
indicates whether the number of stores is taken from displayed_text;
if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is false;
if the API cannot find the number of stores in the HTML code of the page, it takes the number from the displayed_text;
in this case, the parameter is true

***

### displayed\_text?

> `optional` **displayed\_text**: `string`

Defined in: main.ts:186251

text displayed on the Google Shopping page
