**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordDataKeywordDataInfo

# Class: KeywordDataKeywordDataInfo

## Implements

- [`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordDataKeywordDataInfo(data)

> **new KeywordDataKeywordDataInfo**(`data`?): [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

#### Parameters

• **data?**: [`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md)

#### Returns

[`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

#### Source

main.ts:102577

## Properties

### avg\_backlinks\_info?

> **`optional`** **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md).[`avg_backlinks_info`](../interfaces/IKeywordDataKeywordDataInfo.md#avg_backlinks_info)

#### Source

main.ts:102573

***

### keyword?

> **`optional`** **keyword**: `string`

returned keyword

#### Implementation of

[`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md).[`keyword`](../interfaces/IKeywordDataKeywordDataInfo.md#keyword)

#### Source

main.ts:102559

***

### keyword\_info?

> **`optional`** **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md).[`keyword_info`](../interfaces/IKeywordDataKeywordDataInfo.md#keyword_info)

#### Source

main.ts:102565

***

### keyword\_properties?

> **`optional`** **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md).[`keyword_properties`](../interfaces/IKeywordDataKeywordDataInfo.md#keyword_properties)

#### Source

main.ts:102567

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md).[`language_code`](../interfaces/IKeywordDataKeywordDataInfo.md#language_code)

#### Source

main.ts:102563

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md).[`location_code`](../interfaces/IKeywordDataKeywordDataInfo.md#location_code)

#### Source

main.ts:102561

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md).[`se_type`](../interfaces/IKeywordDataKeywordDataInfo.md#se_type)

#### Source

main.ts:102557

***

### serp\_info?

> **`optional`** **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IKeywordDataKeywordDataInfo`](../interfaces/IKeywordDataKeywordDataInfo.md).[`serp_info`](../interfaces/IKeywordDataKeywordDataInfo.md#serp_info)

#### Source

main.ts:102570

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:102586

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:102610

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

#### Source

main.ts:102603