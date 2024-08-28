[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKeywordData

# Interface: IKeywordData

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Defined in

main.ts:105604

***

### keyword?

> `optional` **keyword**: `string`

returned keyword

#### Defined in

main.ts:105590

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

keyword data for the returned keyword

#### Defined in

main.ts:105596

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

additional information about the keyword

#### Defined in

main.ts:105598

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:105594

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:105592

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Defined in

main.ts:105588

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Defined in

main.ts:105601
