[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsCategoriesResultInfo

# Interface: IDataforseoLabsCategoriesResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

category code

#### Defined in

main.ts:81949

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

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

#### Defined in

main.ts:81962

***

### category\_name?

> `optional` **category\_name**: `string`

full name of the category

#### Defined in

main.ts:81951
