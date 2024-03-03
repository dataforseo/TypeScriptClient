[Documentation](../README.md) / [Exports](../modules.md) / ISpellInfo

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

main.ts:22034

___

### type

• `Optional` **type**: `string`

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for

#### Defined in

main.ts:22040
