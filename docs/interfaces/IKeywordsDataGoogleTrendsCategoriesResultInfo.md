[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleTrendsCategoriesResultInfo

# Interface: IKeywordsDataGoogleTrendsCategoriesResultInfo

## Implemented by

- [`KeywordsDataGoogleTrendsCategoriesResultInfo`](../classes/KeywordsDataGoogleTrendsCategoriesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category\_code](IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code)
- [category\_code\_parent](IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code_parent)
- [category\_name](IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_name)

## Properties

### category\_code

• `Optional` **category\_code**: `number`

unique google trends category identifier

#### Defined in

main.ts:122036

___

### category\_code\_parent

• `Optional` **category\_code\_parent**: `number`

the code of the superordinate category
example:
"category_code": 1100,
"category_name": "Superhero Films",
"category_code_parent": 1097
where category_code_parent corresponds to:
"category_code": 1097,
"category_name": "Action & Adventure Films"

#### Defined in

main.ts:122047

___

### category\_name

• `Optional` **category\_name**: `string`

name of the google trends category

#### Defined in

main.ts:122038
