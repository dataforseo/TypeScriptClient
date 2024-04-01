[Documentation](../README.md) / [Exports](../modules.md) / IContentAnalysisCategoriesResultInfo

# Interface: IContentAnalysisCategoriesResultInfo

## Implemented by

- [`ContentAnalysisCategoriesResultInfo`](../classes/ContentAnalysisCategoriesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category\_code](IContentAnalysisCategoriesResultInfo.md#category_code)
- [category\_code\_parent](IContentAnalysisCategoriesResultInfo.md#category_code_parent)
- [category\_name](IContentAnalysisCategoriesResultInfo.md#category_name)

## Properties

### category\_code

• `Optional` **category\_code**: `number`

category code

#### Defined in

main.ts:161339

___

### category\_code\_parent

• `Optional` **category\_code\_parent**: `number`

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

main.ts:161351

___

### category\_name

• `Optional` **category\_name**: `string`

full name of the category

#### Defined in

main.ts:161341
