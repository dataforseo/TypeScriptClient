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

<<<<<<< HEAD
main.ts:102683
=======
main.ts:102716
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`avg_backlinks_info`](../interfaces/IKeywordData.md#avg_backlinks_info)

#### Defined in

<<<<<<< HEAD
main.ts:102679
=======
main.ts:102712
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword?

> `optional` **keyword**: `string`

returned keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword`](../interfaces/IKeywordData.md#keyword)

#### Defined in

<<<<<<< HEAD
main.ts:102665
=======
main.ts:102698
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword_info`](../interfaces/IKeywordData.md#keyword_info)

#### Defined in

<<<<<<< HEAD
main.ts:102671
=======
main.ts:102704
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword_properties`](../interfaces/IKeywordData.md#keyword_properties)

#### Defined in

<<<<<<< HEAD
main.ts:102673
=======
main.ts:102706
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`language_code`](../interfaces/IKeywordData.md#language_code)

#### Defined in

<<<<<<< HEAD
main.ts:102669
=======
main.ts:102702
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`location_code`](../interfaces/IKeywordData.md#location_code)

#### Defined in

<<<<<<< HEAD
main.ts:102667
=======
main.ts:102700
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`se_type`](../interfaces/IKeywordData.md#se_type)

#### Defined in

<<<<<<< HEAD
main.ts:102663
=======
main.ts:102696
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`serp_info`](../interfaces/IKeywordData.md#serp_info)

#### Defined in

<<<<<<< HEAD
main.ts:102676
=======
main.ts:102709
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
main.ts:102692
=======
main.ts:102725
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
main.ts:102716
=======
main.ts:102749
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordData`](KeywordData.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordData`](KeywordData.md)

#### Defined in

<<<<<<< HEAD
main.ts:102709
=======
main.ts:102742
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
