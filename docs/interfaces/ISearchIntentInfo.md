[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISearchIntentInfo

# Interface: ISearchIntentInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### foreign\_intent?

> `optional` **foreign\_intent**: `string`[]

supplementary search intents
possible values: informational, navigational, commercial, transactional

#### Defined in

main.ts:83465

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when the dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:83470

***

### main\_intent?

> `optional` **main\_intent**: `string`

main search intent
possible values: informational, navigational, commercial, transactional

#### Defined in

main.ts:83462

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type
possible values: google

#### Defined in

main.ts:83459
