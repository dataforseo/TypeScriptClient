[Documentation](../README.md) / [Exports](../modules.md) / ISearchIntentInfo

# Interface: ISearchIntentInfo

## Implemented by

- [`SearchIntentInfo`](../classes/SearchIntentInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [foreign\_intent](ISearchIntentInfo.md#foreign_intent)
- [last\_updated\_time](ISearchIntentInfo.md#last_updated_time)
- [main\_intent](ISearchIntentInfo.md#main_intent)
- [se\_type](ISearchIntentInfo.md#se_type)

## Properties

### foreign\_intent

• `Optional` **foreign\_intent**: `string`[]

supplementary search intents
possible values: informational, navigational, commercial, transactional

#### Defined in

main.ts:79764

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when search intent data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:79769

___

### main\_intent

• `Optional` **main\_intent**: `string`

main search intent
possible values: informational, navigational, commercial, transactional

#### Defined in

main.ts:79761

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type
possible values: google

#### Defined in

main.ts:79758
