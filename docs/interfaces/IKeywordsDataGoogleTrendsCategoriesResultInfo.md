[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataGoogleTrendsCategoriesResultInfo

# Interface: IKeywordsDataGoogleTrendsCategoriesResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

unique google trends category identifier

#### Defined in

main.ts:122889

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

the code of the superordinate category
example:
"category_code": 1100,
"category_name": "Superhero Films",
"category_code_parent": 1097
where category_code_parent corresponds to:
"category_code": 1097,
"category_name": "Action & Adventure Films"

#### Defined in

main.ts:122900

***

### category\_name?

> `optional` **category\_name**: `string`

name of the google trends category

#### Defined in

main.ts:122891
