**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsCategoriesResultInfo

# Class: KeywordsDataGoogleTrendsCategoriesResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsCategoriesResultInfo(data)

> **new KeywordsDataGoogleTrendsCategoriesResultInfo**(`data`?): [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Source

main.ts:123145

## Properties

### category\_code?

> **`optional`** **category\_code**: `number`

unique google trends category identifier

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[`category_code`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_code)

#### Source

main.ts:123130

***

### category\_code\_parent?

> **`optional`** **category\_code\_parent**: `number`

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

#### Source

main.ts:123141

***

### category\_name?

> **`optional`** **category\_name**: `string`

name of the google trends category

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResultInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md).[`category_name`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResultInfo.md#category_name)

#### Source

main.ts:123132

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:123154

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:123173

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)

#### Source

main.ts:123166
