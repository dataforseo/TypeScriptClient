[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisCategoriesResultInfo

# Class: ContentAnalysisCategoriesResultInfo

Defined in: main.ts:177564

## Implements

- [`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisCategoriesResultInfo()

> **new ContentAnalysisCategoriesResultInfo**(`data`?): [`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

Defined in: main.ts:177582

#### Parameters

##### data?

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md)

#### Returns

[`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:177566

category code

#### Implementation of

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md).[`category_code`](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_code)

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

Defined in: main.ts:177578

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

***

### category\_name?

> `optional` **category\_name**: `string`

Defined in: main.ts:177568

full name of the category

#### Implementation of

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md).[`category_name`](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:177591

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:177610

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)

Defined in: main.ts:177603

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisCategoriesResultInfo`](ContentAnalysisCategoriesResultInfo.md)
