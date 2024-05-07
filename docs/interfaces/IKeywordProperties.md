**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordProperties

# Interface: IKeywordProperties

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### core\_keyword?

> **`optional`** **core\_keyword**: `string`

main keyword in a group
contains the main keyword in a group determined by the synonym clustering algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Source

main.ts:82475

***

### detected\_language?

> **`optional`** **detected\_language**: `string`

detected language of the keyword
indicates the language of the keyword as identified by our system

#### Source

main.ts:82489

***

### is\_another\_language?

> **`optional`** **is\_another\_language**: `boolean`

detected language of the keyword is different from the set language
if true, the language set in the request does not match the language determined by our system for a given keyword

#### Source

main.ts:82492

***

### keyword\_difficulty?

> **`optional`** **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Source

main.ts:82486

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:82471

***

### synonym\_clustering\_algorithm?

> **`optional`** **synonym\_clustering\_algorithm**: `string`

the algorithm used to identify synonyms
possible values:
keyword_metrics – indicates the algorithm based on keyword_info parameters
text_processing – indicates the text-based algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

#### Source

main.ts:82481
