[dataforseo-client](../README.md) / [Exports](../modules.md) / ISpellInfo

# Interface: ISpellInfo

## Implemented by

- [`SpellInfo`](../classes/SpellInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keyword](ISpellInfo.md#keyword)
- [type](ISpellInfo.md#type)

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Defined in

[main.ts:21892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21892)

___

### type

• `Optional` **type**: `string`

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for

#### Defined in

[main.ts:21898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21898)
