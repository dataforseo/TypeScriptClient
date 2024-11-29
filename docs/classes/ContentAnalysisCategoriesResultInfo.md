[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisCategoriesResultInfo

# Class: ContentAnalysisCategoriesResultInfo

## Implements

- [`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisCategoriesResultInfo()

> **new ContentAnalysisCategoriesResultInfo**(`data`?): [`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

#### Parameters

##### data?

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md)

#### Returns

[`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

#### Defined in

main.ts:177150

## Properties

### category\_code?

> `optional` **category\_code**: `number`

category code

#### Implementation of

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md).[`category_code`](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_code)

#### Defined in

main.ts:177134

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

#### Implementation of

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md).[`category_code_parent`](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_code_parent)

#### Defined in

main.ts:177146

***

### category\_name?

> `optional` **category\_name**: `string`

full name of the category

#### Implementation of

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md).[`category_name`](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_name)

#### Defined in

main.ts:177136

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:177159

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:177178

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

#### Defined in

main.ts:177171
