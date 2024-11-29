[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsCategoriesResultInfo

# Class: KeywordsDataGoogleTrendsCategoriesResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsCategoriesResultInfo()

> **new KeywordsDataGoogleTrendsCategoriesResultInfo**(`data`?): [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Defined in

main.ts:133089

## Properties

### category\_code?

> `optional` **category\_code**: `number`

unique google trends category identifier

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[`category_code`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code)

#### Defined in

main.ts:133074

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

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[`category_code_parent`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code_parent)

#### Defined in

main.ts:133085

***

### category\_name?

> `optional` **category\_name**: `string`

name of the google trends category

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[`category_name`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_name)

#### Defined in

main.ts:133076

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:133098

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:133117

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Defined in

main.ts:133110
