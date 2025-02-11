[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsCategoriesResultInfo

# Class: KeywordsDataGoogleTrendsCategoriesResultInfo

Defined in: main.ts:133256

## Implements

- [`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsCategoriesResultInfo()

> **new KeywordsDataGoogleTrendsCategoriesResultInfo**(`data`?): [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

Defined in: main.ts:133273

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:133258

unique google trends category identifier

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[`category_code`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code)

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

Defined in: main.ts:133269

the code of the superordinate category
example:
"category_code": 1100,
"category_name": "Superhero Films",
"category_code_parent": 1097
where category_code_parent corresponds to:
"category_code": 1097,
"category_name": "Action & Adventure Films"

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[`category_code_parent`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code_parent)

***

### category\_name?

> `optional` **category\_name**: `string`

Defined in: main.ts:133260

name of the google trends category

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[`category_name`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:133282

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:133301

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

Defined in: main.ts:133294

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)
