[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISearchIntentInfo

# Interface: ISearchIntentInfo

Defined in: main.ts:93315

## Indexable

\[`key`: `string`\]: `any`

## Properties

### foreign\_intent?

> `optional` **foreign\_intent**: `string`[]

Defined in: main.ts:93324

supplementary search intents
possible values: informational, navigational, commercial, transactional

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:93329

date and time when the dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### main\_intent?

> `optional` **main\_intent**: `string`

Defined in: main.ts:93321

main search intent
possible values: informational, navigational, commercial, transactional

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:93318

search engine type
possible values: google
