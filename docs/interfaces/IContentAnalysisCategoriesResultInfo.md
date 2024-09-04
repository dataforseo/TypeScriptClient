[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentAnalysisCategoriesResultInfo

# Interface: IContentAnalysisCategoriesResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

category code

#### Defined in

main.ts:165571

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
"category_code": 10178,
"category_name": "Apparel Accessories"

#### Defined in

main.ts:165583

***

### category\_name?

> `optional` **category\_name**: `string`

full name of the category

#### Defined in

main.ts:165573
