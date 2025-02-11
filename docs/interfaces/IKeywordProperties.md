[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordProperties

# Interface: IKeywordProperties

Defined in: main.ts:92790

## Indexable

\[`key`: `string`\]: `any`

## Properties

### core\_keyword?

> `optional` **core\_keyword**: `string`

Defined in: main.ts:92796

main keyword in a group
contains the main keyword in a group determined by the synonym clustering algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword

***

### detected\_language?

> `optional` **detected\_language**: `string`

Defined in: main.ts:92810

detected language of the keyword
indicates the language of the keyword as identified by our system

***

### is\_another\_language?

> `optional` **is\_another\_language**: `boolean`

Defined in: main.ts:92813

detected language of the keyword is different from the set language
if true, the language set in the request does not match the language determined by our system for a given keyword

***

### keyword\_difficulty?

> `optional` **keyword\_difficulty**: `number`

Defined in: main.ts:92807

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:92792

search engine type

***

### synonym\_clustering\_algorithm?

> `optional` **synonym\_clustering\_algorithm**: `string`

Defined in: main.ts:92802

the algorithm used to identify synonyms
possible values:
keyword_metrics – indicates the algorithm based on keyword_info parameters
text_processing – indicates the text-based algorithm
if the value is null, our database does not contain any keywords the corresponding algorithm could identify as synonymous with keyword
