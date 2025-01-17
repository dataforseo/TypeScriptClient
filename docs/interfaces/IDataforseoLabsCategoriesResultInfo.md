[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsCategoriesResultInfo

# Interface: IDataforseoLabsCategoriesResultInfo

Defined in: main.ts:91692

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:91694

category code

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

Defined in: main.ts:91707

the code of the superordinate category
example:
"category_code": 10178,
"category_name": "Apparel Accessories",
"category_code_parent": 10021
where category_code_parent
corresponds to:
"category_code": 10021,
"category_name": "Apparel"
"category_code_parent": null

***

### category\_name?

> `optional` **category\_name**: `string`

Defined in: main.ts:91696

full name of the category
