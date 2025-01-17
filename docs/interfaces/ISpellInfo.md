[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISpellInfo

# Interface: ISpellInfo

Defined in: main.ts:24430

## Indexable

\[`key`: `string`\]: `any`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:24433

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24439

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for
