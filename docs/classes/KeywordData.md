**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordData

# Class: KeywordData

## Implements

- [`IKeywordData`](../interfaces/IKeywordData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordData(data)

> **new KeywordData**(`data`?): [`KeywordData`](KeywordData.md)

#### Parameters

• **data?**: [`IKeywordData`](../interfaces/IKeywordData.md)

#### Returns

[`KeywordData`](KeywordData.md)

#### Source

main.ts:104903

## Properties

### avg\_backlinks\_info?

> **`optional`** **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`avg_backlinks_info`](../interfaces/IKeywordData.md#avg_backlinks_info)

#### Source

main.ts:104899

***

### keyword?

> **`optional`** **keyword**: `string`

returned keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword`](../interfaces/IKeywordData.md#keyword)

#### Source

main.ts:104885

***

### keyword\_info?

> **`optional`** **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword_info`](../interfaces/IKeywordData.md#keyword_info)

#### Source

main.ts:104891

***

### keyword\_properties?

> **`optional`** **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword_properties`](../interfaces/IKeywordData.md#keyword_properties)

#### Source

main.ts:104893

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`language_code`](../interfaces/IKeywordData.md#language_code)

#### Source

main.ts:104889

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`location_code`](../interfaces/IKeywordData.md#location_code)

#### Source

main.ts:104887

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`se_type`](../interfaces/IKeywordData.md#se_type)

#### Source

main.ts:104883

***

### serp\_info?

> **`optional`** **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`serp_info`](../interfaces/IKeywordData.md#serp_info)

#### Source

main.ts:104896

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:104912

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:104936

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordData`](KeywordData.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordData`](KeywordData.md)

#### Source

main.ts:104929
