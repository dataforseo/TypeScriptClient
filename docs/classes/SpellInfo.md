[**Documentation**](../README.md)

***

[Documentation](../README.md) / SpellInfo

# Class: SpellInfo

## Implements

- [`ISpellInfo`](../interfaces/ISpellInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SpellInfo()

> **new SpellInfo**(`data`?): [`SpellInfo`](SpellInfo.md)

#### Parameters

##### data?

[`ISpellInfo`](../interfaces/ISpellInfo.md)

#### Returns

[`SpellInfo`](SpellInfo.md)

#### Defined in

main.ts:24391

## Properties

### keyword?

> `optional` **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[`ISpellInfo`](../interfaces/ISpellInfo.md).[`keyword`](../interfaces/ISpellInfo.md#keyword)

#### Defined in

main.ts:24381

***

### type?

> `optional` **type**: `string`

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for

#### Implementation of

[`ISpellInfo`](../interfaces/ISpellInfo.md).[`type`](../interfaces/ISpellInfo.md#type)

#### Defined in

main.ts:24387

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:24400

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:24418

***

### fromJS()

> `static` **fromJS**(`data`): [`SpellInfo`](SpellInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SpellInfo`](SpellInfo.md)

#### Defined in

main.ts:24411
