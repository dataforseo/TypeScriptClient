[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordData

# Class: KeywordData

## Implements

- [`IKeywordData`](../interfaces/IKeywordData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordData()

> **new KeywordData**(`data`?): [`KeywordData`](KeywordData.md)

#### Parameters

• **data?**: [`IKeywordData`](../interfaces/IKeywordData.md)

#### Returns

[`KeywordData`](KeywordData.md)

#### Defined in

main.ts:102683

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`avg_backlinks_info`](../interfaces/IKeywordData.md#avg_backlinks_info)

#### Defined in

main.ts:102679

***

### keyword?

> `optional` **keyword**: `string`

returned keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword`](../interfaces/IKeywordData.md#keyword)

#### Defined in

main.ts:102665

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword_info`](../interfaces/IKeywordData.md#keyword_info)

#### Defined in

main.ts:102671

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword_properties`](../interfaces/IKeywordData.md#keyword_properties)

#### Defined in

main.ts:102673

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`language_code`](../interfaces/IKeywordData.md#language_code)

#### Defined in

main.ts:102669

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`location_code`](../interfaces/IKeywordData.md#location_code)

#### Defined in

main.ts:102667

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`se_type`](../interfaces/IKeywordData.md#se_type)

#### Defined in

main.ts:102663

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`serp_info`](../interfaces/IKeywordData.md#serp_info)

#### Defined in

main.ts:102676

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:102692

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:102716

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordData`](KeywordData.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordData`](KeywordData.md)

#### Defined in

main.ts:102709
