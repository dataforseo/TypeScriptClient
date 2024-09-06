[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISpellInfo

# Interface: ISpellInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Defined in

main.ts:23540

***

### type?

> `optional` **type**: `string`

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for

#### Defined in

main.ts:23546
