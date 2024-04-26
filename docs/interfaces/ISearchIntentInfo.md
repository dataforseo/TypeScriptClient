**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISearchIntentInfo

# Interface: ISearchIntentInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### foreign\_intent?

> **`optional`** **foreign\_intent**: `string`[]

supplementary search intents
possible values: informational, navigational, commercial, transactional

#### Source

main.ts:82145

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when search intent data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:82150

***

### main\_intent?

> **`optional`** **main\_intent**: `string`

main search intent
possible values: informational, navigational, commercial, transactional

#### Source

main.ts:82142

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type
possible values: google

#### Source

main.ts:82139
