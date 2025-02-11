[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleTrendsCategoriesResultInfo

# Interface: IKeywordsDataGoogleTrendsCategoriesResultInfo

Defined in: main.ts:133314

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:133316

unique google trends category identifier

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

Defined in: main.ts:133327

the code of the superordinate category
example:
"category_code": 1100,
"category_name": "Superhero Films",
"category_code_parent": 1097
where category_code_parent corresponds to:
"category_code": 1097,
"category_name": "Action & Adventure Films"

***

### category\_name?

> `optional` **category\_name**: `string`

Defined in: main.ts:133318

name of the google trends category
